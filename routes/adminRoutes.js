const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware'); // Checks if user is admin

// Dashboard overview
router.get('/dashboard', authMiddleware, adminMiddleware, adminController.getDashboardStats);

// Manage users
router.get('/users', authMiddleware, adminMiddleware, adminController.getAllUsers);
router.put('/users/:id', authMiddleware, adminMiddleware, adminController.updateUserRole);
router.delete('/users/:id', authMiddleware, adminMiddleware, adminController.deleteUser);

// Manage jobs
router.get('/jobs', authMiddleware, adminMiddleware, adminController.getAllJobs);
router.delete('/jobs/:id', authMiddleware, adminMiddleware, adminController.deleteJob);

// Manage contractors
router.get('/contractors', authMiddleware, adminMiddleware, adminController.getAllContractors);
router.delete('/contractors/:id', authMiddleware, adminMiddleware, adminController.deleteContractor);

module.exports = router;
// trusted-hand/routes/adminRoutes