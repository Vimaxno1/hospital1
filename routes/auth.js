const express = require('express');

const authController = require('../controllers/auth');

const { check, body, validationResult } = require('express-validator');

const router = express.Router();

router.get('/sign-in', authController.getSignin);

router.post(
  '/sign-in',
  [
    check('username').notEmpty().withMessage('Username is reequired'),
    check('password').notEmpty().withMessage('Password is reequired'),
  ],
  authController.postSignin
);

router.get('/sign-up', authController.getSignup);

router.post('/sign-up', authController.postSignup);

module.exports = router;
