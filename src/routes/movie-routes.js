const express = require('express');
const router = express.Router();
const movieController = require("../controllers/movie-controller")


router.get('/getAll', movieController.getAll);
router.get('/getById/:movieId', movieController.getById);
router.get('/getByName/:movieName', movieController.getByName);

router.post('/updateById', movieController.updateById);
router.post('/doComment', movieController.doComment);
router.post('/removeComment', movieController.removeComment);

module.exports = router;