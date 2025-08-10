const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');
const authMiddleware = require('../middleware/authMiddleware');

// Apply for a job
router.post('/', authMiddleware, applicationController.applyForJob);

// Get all applications (admin or employer)
router.get('/', authMiddleware, applicationController.getAllApplications);

// Get applications by user
router.get('/my-applications', authMiddleware, applicationController.getUserApplications);

// Get single application by ID
router.get('/:id', authMiddleware, applicationController.getApplicationById);

// Update application status (e.g., accepted/rejected)
router.put('/:id', authMiddleware, applicationController.updateApplicationStatus);

// Delete an application
router.delete('/:id', authMiddleware, applicationController.deleteApplication);

module.exports = router;
// trusted-hand/routes/applicationRoutes.js
// This file defines the routes for job applications in the Trusted Hand application.
// It includes routes for applying to jobs, viewing applications, and managing application statuses.
// The routes are protected by authentication middleware to ensure only authorized users can access them.
// The applicationController handles the business logic for each route, such as creating, retrieving, updating, and deleting applications.