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