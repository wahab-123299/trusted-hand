const express = require('express');
const router = express.Router();
const contractorController = require('../controllers/contractorController');
const authMiddleware = require('../middleware/authMiddleware');

// Public Routes
router.get('/', contractorController.getAllContractors);
router.get('/:id', contractorController.getContractorById);

// Protected Routes
router.post('/', authMiddleware, contractorController.createContractor);
router.put('/:id', authMiddleware, contractorController.updateContractor);
router.delete('/:id', authMiddleware, contractorController.deleteContractor);

module.exports = router;
// trusted-hand/routes/contractorRoutes.js
// This file defines the routes for managing contractors in the Trusted Hand application.