const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    // o _id é criado automaticamente
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true,
        trim: true
    },

    age: {
        type: Number,
        required: true
    },

    active: {
        type: Boolean,
        required: true,
        default: true
    },

    favoriteMovies: [{
        type: Number,
        required: false
    }],

    watchedMovies: [{
        type: Number,
        required: false
    }],

    toWatchMovies: [{
        type: Number,
        required: false
    }]

    /*phones: [{
        type: String,
        required: false
    }]*/
});

module.exports = mongoose.model('User', schema);