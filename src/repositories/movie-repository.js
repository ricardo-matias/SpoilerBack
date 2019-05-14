const mongoose = require("mongoose");
const Movie = mongoose.model("Movie");

exports.getAll = async() => {
    return await Movie.find();
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