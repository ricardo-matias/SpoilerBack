const express = require('express');
const router = express.Router();
const authService = require('../services/auth-service');

const userController = require("../controllers/user-controller")

router.get('/', authService.authorize, userController.getAll);
router.get('/:token', authService.authorize, userController.getUser);
router.get('/:name', userController.getByName);
router.get('/telefone/:phone', userController.getByPhone)

router.post('/new', userController.create);
router.post('/auth', userController.authenticate);

router.put('/:id', userController.update);

router.delete('/:id', userController.delete);

module.exports = router;