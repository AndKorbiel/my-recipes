const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');
const usersController = require('../controllers/user.controller');

router.post('/login', authController.loginUser);
router.post('/refresh', authController.refreshTokenVerify);

// secure router
router.get('/users', authController.accessTokenVerify, usersController.getUserList);
router.post('/register', authController.accessTokenVerify, authController.createUser);

module.exports = router;