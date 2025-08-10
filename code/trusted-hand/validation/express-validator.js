const { body } = require('express-validator');

exports.signupValidator = [
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email address'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
];
exports.loginValidator = [
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email address'),
    body('password')
    .exists()
    .withMessage('Password is required')
];