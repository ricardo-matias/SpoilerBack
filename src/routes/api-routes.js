const express = require('express');
const router = express.Router();
const apiController = require("../controllers/api-controller")


router.get('/populateMovies', apiController.populateMovies);

module.exports = router;