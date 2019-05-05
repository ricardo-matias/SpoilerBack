const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.status(200).send({
        titulo: "Estudo NodeJS API",
        versao: "0.0.2"
    });
});

module.exports = router;