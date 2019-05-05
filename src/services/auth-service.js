jwt = require('jsonwebtoken');

// Gera um token que contem as informações encripitadas do usuário
exports.generateToken = async (data) => {
    return jwt.sign(data, global.ENCRYPT_KEY, { expiresIn: '1d' });
}

// Decodifica o token, retornando as informações passadas na hora da geração
exports.decodeToken = async (token) => {
    let data = await jwt.verify(token, global.ENCRYPT_KEY);
    return data;
}

// Autoriza ou proibe as requisições feitas em uma rota a partir de um token passado
exports.authorize = function(request, response, next) {
    let token = request.body.token || request.query.token || request.headers['acess_token'];

    if(!token) {
        response.status(401).json({
            message: "Acesso restrito"
        });
    } else {
        jwt.verify(token, global.ENCRYPT_KEY, function (error, decoded) {
            if(error) {
                response.status(401).json({
                    message: "Token inválido"
                });
            } else {
                next();
            }
        });
    }
}