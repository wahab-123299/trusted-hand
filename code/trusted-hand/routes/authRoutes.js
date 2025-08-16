// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { signupValidator } = require('../validators/authValidator');
const validateRequest = require('../middleware/validateRequest');
const protect = require('../middleware/protect');

// Public auth endpoints
router.post('/signup', signupValidator, validateRequest, authController.signup);
router.post('/login', authController.login);
router.post('/refresh-token', authController.refreshToken);
router.post('/register', signupValidator, validateRequest, authController.registerUser);

// Protected auth endpoints
router.post('/logout', protect, authController.logoutUser);
router.get('/me', protect, authController.getMe);

module.exports = router;
