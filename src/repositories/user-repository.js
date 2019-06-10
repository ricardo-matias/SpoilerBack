const mongoose = require("mongoose");
const User = mongoose.model("User");

exports.getAll = async () => {
    return await User.find({
        active: true
    });
}

exports.getByName = async (request_name) => {
    return await User.findOne({
        name: request_name,
        active: true
    }, "_id name age phones");
}

exports.getByPhone = async (request_phone) => {
    return await User.find({
        phones: request_phone,
        active: "true"
    });
}

exports.getFavoriteMovies = async (userId) => {
    let user = await User.findOne({
        _id: userId
    })

    return user.favoriteMovies;
}

exports.getWatchedMovies = async (userId) => {
    let user = await User.findOne({
        _id: userId
    })

    return user.watchedMovies;
}

exports.getToWatchovies = async (userId) => {
    let user = await User.findOne({
        _id: userId
    })

    return user.toWatchMovies;
}

exports.create = async (request_data) => {
    let user = new User(request_data);
    await user.save();
}

exports.update = async (request_id, request_data) => {
    await User.findByIdAndUpdate(request_id, {
        $set: {
            name: request_data.name,
            age: request_data.age,
            active: request_data.active,
            phones: request_data.phones
        }
    });
}

exports.addFavoriteMovie = async (request_data) => {
    let user = await User.findOne({
        _id: request_data.userId
    })
    let array = [request_data.movieId]
    userFavorites = user.favoriteMovies.concat(array);
    await User.findOneAndUpdate({ _id: request_data.userId }, {
        $set: {
            favoriteMovies: userFavorites
        }
    })

    console.log(userFavorites);
}

exports.removeFavoriteMovie = async (request_data) => {
    let user = await User.findOne({
        _id: request_data.userId
    })

    for (let i = 0; i < user.favoriteMovies.length; i++) {
        if (request_data.movieId == user.favoriteMovies[i])
            user.favoriteMovies.splice(i, 1);
    }

    await User.findOneAndUpdate({ _id: request_data.userId }, {
        $set: {
            favoriteMovies: user.favoriteMovies
        }
    })
}

exports.addWatchedMovie = async (request_data) => {
    let user = await User.findOne({
        _id: request_data.userId
    })
    let array = [request_data.movieId]
    userWatcheds = user.watchedMovies.concat(array);
    await User.findOneAndUpdate({ _id: request_data.userId }, {
        $set: {
            watchedMovies: userWatcheds
        }
    })

    console.log(userWatcheds);
}

exports.removeWatchedMovie = async (request_data) => {
    let user = await User.findOne({
        _id: request_data.userId
    })

    for (let i = 0; i < user.watchedMovies.length; i++) {
        if (request_data.movieId == user.watchedMovies[i])
            user.watchedMovies.splice(i, 1);
    }

    await User.findOneAndUpdate({ _id: request_data.userId }, {
        $set: {
            watchedMovies: user.watchedMovies
        }
    })
}

exports.addToWatchMovie = async (request_data) => {
    let user = await User.findOne({
        _id: request_data.userId
    })
    let array = [request_data.movieId]
    userToWatch = user.toWatchMovies.concat(array);
    await User.findOneAndUpdate({ _id: request_data.userId }, {
        $set: {
            toWatchMovies: userToWatch
        }
    })

    console.log(userToWatch);
}

exports.removeToWatchMovie = async (request_data) => {
    let user = await User.findOne({
        _id: request_data.userId
    })

    for (let i = 0; i < user.toWatchMovies.length; i++) {
        if (request_data.movieId == user.toWatchMovies[i])
            user.toWatchMovies.splice(i, 1);
    }

    await User.findOneAndUpdate({ _id: request_data.userId }, {
        $set: {
            toWatchMovies: user.toWatchMovies
        }
    })
}

exports.delete = async (request_id) => {
    await User.findByIdAndDelete({ _id: request_id })
    //console.log(User.findByIdAndDelete({_id: request_id}))
}

exports.authenticate = async (request_data) => {
    return await User.findOne({
        username: request_data.username,
        password: request_data.password
    });
}