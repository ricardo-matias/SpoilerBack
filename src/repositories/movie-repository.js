const mongoose = require("mongoose");
const Movie = mongoose.model("Movie");

exports.getAll = async() => {
    return await Movie.find();
}

exports.create = async(request_data) => {
    let Movie = new Movie(request_data);
    await Movie.save();
}

exports.delete = async(request_id) => {
    await Movie.findByIdAndDelete({_id: request_id})
    //console.log(User.findByIdAndDelete({_id: request_id}))
}

exports.deleteAll = async() => {
    await Movie.remove({})
    //console.log(User.findByIdAndDelete({_id: request_id}))
}