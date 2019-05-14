const express = require('express');
const router = express.Router();
const movieController = require("../controllers/movie-controller")


router.get('/getAll', movieController.getAll);

module.exports = router;