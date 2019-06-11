const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    // o _id é criado automaticamente
    movie_id: {
        type: Number,
        required: true,
        unique: true
    },

    title: {
        type: String,
        required: false
    },

    overview: {
        type: String,
        required: false
    },

    release_date: {
        type: String,
        required: false
    },

    comments: [{
        comment: {
            type: String,
            required: false
        },

        time: {
            type : Date, 
            default: Date.now
        },

        user: {
            name: {
                type: String
            },

            username: {
                type: String
            },

            userId: {
                type: String
            }
        }
    }],

    photo: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Movie', MovieSchema);

/*{
    "vote_count": 5157,
        "id": 299534,
            "video": false,
             "vote_average": 8.6,
              "title": "Vingadores: Ultimato",
               "popularity": 311.829,
                "poster_path": "\/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg",
                 "original_language": "en",
                  "original_title": "Avengers: Endgame",
                   "genre_ids": [12, 878, 28],
                    "backdrop_path": "\/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
                     "adult": false,
                      "overview": "Após os eventos devastadores de Vingadores: Guerra Infinita, o universo está em ruínas devido aos esforços do Titã Louco, Thanos. Com a ajuda de aliados remanescentes, os Vingadores devem se reunir mais uma vez a fim de desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, não importando as consequências.",
                       "release_date": "2019-04-24"
}*/