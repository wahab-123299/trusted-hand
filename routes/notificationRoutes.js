const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const notificationController = require('../controllers/notificationController');

router.post('/', authMiddleware, notificationController.createNotification);
router.get('/', authMiddleware, notificationController.getNotifications);
router.put('/:id/read', authMiddleware, notificationController.markAsRead);
router.delete('/:id', authMiddleware, notificationController.deleteNotification);

module.exports = router;
// trusted-hand/routes/notificationRoutes.js
// trusted-hand/controllers/notificationController.js
const Notification = require('../models/Notification');
// 📥 Create a new notification
exports.createNotification = async (req, res) => {
  try {
    const { message } = req.body;

    const notification = new Notification({
      user: req.user.id,
      message,
      read: false
    });

    await notification.save();
    res.status(201).json({ success: true, notification });
  } catch (err) {
    console.error('Error creating notification:', err);
    res.status(500).json({ error: 'Failed to create notification' });
  }
};