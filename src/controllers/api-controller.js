const https = require('https');
const MovieRepository = require('../repositories/movie-repository');
exports.populateMovies = async (request, response, next) => {
    try {
        //let users = await UserRepository.getAll();
        https.get('https://api.themoviedb.org/3/movie/now_playing?api_key=827876a5af03c2b86ccef2a059a92a5c&language=pt-BR', (resp) => {
            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                //element.photo = 'http://image.tmdb.org/t/p/w500/' + element.poster_path;
                let allMovies = JSON.parse(data);
                //console.log(allMovies);
                //console.log(allLines);
                //MovieRepository.deleteAll();
                allMovies.results.forEach(movie => {
                    //console.log(movie);
                    let format_movie = {
                        movie_id: movie.id,
                        title: movie.title,
                        overview: movie.overview,
                        release_date: movie.release_date,
                        photo: 'http://image.tmdb.org/t/p/w500' + movie.poster_path
                    }
                    console.log(format_movie);
                    MovieRepository.create(format_movie);
                    /*if (line.nombre.indexOf('EXTINTA') === -1) {
                      saveLines(line.label, line.nombre);
                    }*/
                  });
            });
            //response.status(200).send(data);

        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
        response.status(200).send('Dados salvos');
    } catch (ex) {
        throwException(response, "Falha ao buscar lista de usuários", ex);
    }
}

function saveLines(lineID, linhas) {
    //this.nativeStorage.setItem(lineID, linhas);
    console.log('Stored item! Nome: + ' + lineID);
}