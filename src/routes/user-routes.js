const express = require('express');
const router = express.Router();
const authService = require('../services/auth-service');

const userController = require("../controllers/user-controller")

router.get('/', userController.getAll);
router.get('/:token', authService.authorize, userController.getSessionUser);
router.get('/:name', userController.getByName);
//router.get('/phone/:phone', userController.getByPhone)
router.get('/favoriteMovies/:userId', authService.authorize, userController.getFavoriteMovies)
router.get('/watchedMovies/:userId', authService.authorize, userController.getWatchedMovies)
router.get('/toWatchMovies/:userId', authService.authorize, userController.getToWatchMovies)
router.get('/checkFavoriteMovie/:userId/:movieId', authService.authorize, userController.isFavoriteMovie)
router.get('/checkWatchedMovie/:userId/:movieId', authService.authorize, userController.isWatchedMovie)
router.get('/checkToWatchMovie/:userId/:movieId', authService.authorize, userController.isToWatchMovie)

router.post('/new', userController.create);
router.post('/auth', userController.authenticate);

router.post('/addFavoriteMovie', authService.authorize, userController.addFavoriteMovie)
router.post('/addWatchedMovie', authService.authorize, userController.addWatchedMovie)
router.post('/addToWatchMovie', authService.authorize, userController.addToWatchMovie)

router.post('/removeFavoriteMovie', authService.authorize, userController.removeFavoriteMovie)
router.post('/removeWatchedMovie', authService.authorize, userController.removeWatchedMovie)
router.post('/removeToWatchMovie', authService.authorize, userController.removeToWatchMovie)

router.put('/:id', userController.update);

router.delete('/:id', userController.delete);

module.exports = router;