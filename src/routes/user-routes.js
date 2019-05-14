const express = require('express');
const router = express.Router();
const authService = require('../services/auth-service');

const userController = require("../controllers/user-controller")

router.get('/', userController.getAll);
router.get('/:token', authService.authorize, userController.getSessionUser);
router.get('/:name', userController.getByName);
//router.get('/phone/:phone', userController.getByPhone)
router.get('/favoriteMovies/:userId', authService.authorize, userController.getFavoriteMovies)

router.post('/new', userController.create);
router.post('/auth', userController.authenticate);
router.post('/favoriteMovies', authService.authorize, userController.updateFavoriteMovies)

router.put('/:id', userController.update);

router.delete('/:id', userController.delete);

module.exports = router;