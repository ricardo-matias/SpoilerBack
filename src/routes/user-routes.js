const express = require('express');
const router = express.Router();
const authService = require('../services/auth-service');

const userController = require("../controllers/user-controller")

router.get('/', userController.getAll);
router.get('/:token', authService.authorize, userController.getSessionUser);
router.get('/:name', userController.getByName);
//router.get('/phone/:phone', userController.getByPhone)
router.get('/favoriteMovies/:userId', authService.authorize, userController.getFavoriteMovies)
router.get('/watchedMovies/:userId', userController.getWatchedMovies)
router.get('/toWatchMovies/:userId', userController.getToWatchMovies)
router.get('/checkFavoriteMovie/:userId/:movieId', userController.isFavoriteMovie)

router.post('/new', userController.create);
router.post('/auth', userController.authenticate);

router.post('/addFavoriteMovie', authService.authorize, userController.addFavoriteMovie)
router.post('/addWatchedMovie', userController.addWatchedMovie)
router.post('/addToWatchMovie', userController.addToWatchMovie)

router.post('/removeFavoriteMovie', userController.removeFavoriteMovie)
router.post('/removeWatchedMovie', userController.removeWatchedMovie)
router.post('/removeToWatchMovie', userController.removeToWatchMovie)

router.put('/:id', userController.update);

router.delete('/:id', userController.delete);

module.exports = router;