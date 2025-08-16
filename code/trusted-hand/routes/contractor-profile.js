module.exports = router;
const express = require('express');
const router = express.Router();
const contractorProfileController = require('../controllers/contractorProfileController');
const authMiddleware = require('../middleware/authMiddleware');

// Get logged-in contractor's profile
router.get('/me', authMiddleware, contractorProfileController.getMyProfile);

// Update logged-in contractor's profile
router.put('/me', authMiddleware, contractorProfileController.updateMyProfile);

// Upload portfolio or profile image
router.post('/me/portfolio', authMiddleware, contractorProfileController.uploadPortfolio);

// Set availability or preferences
router.put('/me/availability', authMiddleware, contractorProfileController.setAvailability);

module.exports = router;
// trusted-hand/routes/contractor-profile.js

