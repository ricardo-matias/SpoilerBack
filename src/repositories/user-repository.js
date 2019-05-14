const mongoose = require("mongoose");
const User = mongoose.model("User");

exports.getAll = async() => {
    return await User.find({
        active: true
    });
}

exports.getByName = async(request_name) => {
    return await User.findOne({
        name: request_name, 
        active: true
    }, "_id name age phones");
}

exports.getByPhone = async(request_phone) => {
    return await User.find({
        phones: request_phone, 
        active: "true"
    });
}

exports.getFavoriteMovies = async(userId) => {
    let user = await User.findOne({
        _id: userId
    }) 

    return user.favoriteMovies;
}

exports.create = async(request_data) => {
    let user = new User(request_data);
    await user.save();
}

exports.update = async(request_id, request_data) => {
    await User.findByIdAndUpdate(request_id, {
        $set: {
            name: request_data.name,
            age: request_data.age,
            active: request_data.active,
            phones: request_data.phones
        }
    });
}

exports.updateFavoriteMovies = async (request_data) => {
    let user = await User.findOne({
        _id: request_data.userId
    }) 
    let array = [request_data.movieId]
    userFavorites = user.favoriteMovies.concat(array);
    await User.findOneAndReplace({_id: request_data.userId}, {
        $set: { 
            favoriteMovies: userFavorites
        }
    })

    console.log(userFavorites);
}

exports.delete = async(request_id) => {
    await User.findByIdAndDelete({_id: request_id})
    //console.log(User.findByIdAndDelete({_id: request_id}))
}

exports.authenticate = async(request_data) => {
    return await User.findOne({
        username: request_data.username,
        password: request_data.password
    });
}