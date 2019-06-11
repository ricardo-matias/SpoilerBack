const mongoose = require("mongoose");
const Movie = mongoose.model("Movie");

exports.getAll = async() => {
    return await Movie.find();
}

exports.getById = async(movieId) => {
    return await Movie.find({
        movie_id: movieId
    });
}

exports.getByTitle = async(movieTitle) => {
    return await Movie.find({
        title: movieTitle
    });
}

exports.doComment = async(request_data) => {
    let array = [request_data];
    console.log(array);
    let movie = await Movie.findOne({
        movie_id: request_data.movieId
    });

    await Movie.findOneAndUpdate({movie_id: request_data.movieId}, {
        $set: {
            comments: movie.comments.concat(array)
        }
    });


}

exports.updateById = async(request_data) => { 
    await Movie.findOneAndUpdate({_id: request_data.movieId}, {
        $set: {
            movie_id: request_data.movie_id,
            title: request_data.title,
            overview: request_data.overview,
            release_date: request_data.release_date,
            photo: request_data.photo
        }
    });
}

exports.create = async(request_data) => {
    let movie = new Movie(request_data);
    await movie.save();
}

exports.delete = async(request_id) => {
    await movie.findByIdAndDelete({_id: request_id})
    //console.log(User.findByIdAndDelete({_id: request_id}))
}

exports.deleteAll = async() => {
    await movie.remove({})
    //console.log(User.findByIdAndDelete({_id: request_id}))
}