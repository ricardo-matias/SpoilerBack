const MovieRepository = require('../repositories/movie-repository');

// Metodos de crud do controller de usuários

exports.getAll = async (request, response, next) => {
    try {
        let movies = await MovieRepository.getAll();
        response.status(200).send(movies);
    } catch (ex) {
        throwException(response, "Falha ao buscar lista de filmes", ex);
    }

}

exports.getById = async (request, response, next) => {
    try {
        let movie = await MovieRepository.getById(request.params.movieId);
        response.status(200).send(movie);
    } catch (ex) {
        throwException(response, "Falha ao buscar filme de id " + request.params.movieId, ex);
    }
}

exports.getByName = async (request, response, next) => {
    try {
        let movie = await MovieRepository.getById(request.params.movieName);
        response.status(200).send(movie);
    } catch (ex) {
        throwException(response, 'Falha ao buscar filme "' + request.params.movieName, ex + '"');
    }
}

exports.updateById = async (request, response, next) => {
    try {
        MovieRepository.updateById(request.body);
        response.status(200).send({
            message: "Filme " + request.body.title + " atualizado com sucesso"
        })
    } catch (ex) {
        throwException(response, "Falha ao atualizar filme " + request.body.title);
    }
}

exports.doComment = async (request, response, next) => {
    try {
        MovieRepository.doComment(request.body);
        response.status(200).send({
            message: "Comentário realizado com sucesso"
        })
    } catch (ex) {
        throwException(response, "Falha ao comentar" + request.body.title);
    }
}

exports.removeComment = async (request, response, next) => {
    try {
        MovieRepository.removeComment(request.body);
        response.status(200).send({
            message: "Comentário removido com sucesso"
        })
    } catch (ex) {
        throwException(response, "Falha ao remover comnetário" + request.body.title);
    }
}

/**
 * Recebe o objeto response, uma messagem de erro e a exceção gerada e devolve uma messagem 
 * de erro completa para o usuário.
 * 
 * @response : objeto response da requisição, usado para retornar a messagem para o usuário
 * @message : messagem de erro que será enviada para o usuário
 * @exception : exceção gerada pela tentativa de uso do banco
 */
throwException = (response, message, exception) => {
    response.status(500).send({
        message: message,
        error: {
            message: exception.message,
            type: exception.name
        }
    })
}