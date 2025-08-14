const Notification = require('../models/Notification');

// 📥 Create a new notification
exports.createNotification = async (req, res) => {
  try {
    const { userId, message } = req.body;

    const notification = await Notification.create({
      user: userId,
      message
    });

    res.status(201).json({ success: true, notification });
  } catch (err) {
    console.error('Error creating notification:', err);
    res.status(500).json({ error: 'Failed to create notification' });
  }
};

// 📤 Get all notifications for logged-in user
exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.user.id })
      .sort({ createdAt: -1 });

    res.json({ success: true, notifications });
  } catch (err) {
    console.error('Error fetching notifications:', err);
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
};

// ✅ Mark a notification as read
exports.markAsRead = async (req, res) => {
  try {
    const { id } = req.params;

    const notification = await Notification.findOneAndUpdate(
      { _id: id, user: req.user.id },
      { read: true },
      { new: true }
    );

    if (!notification) {
      return res.status(404).json({ error: 'Notification not found' });
    }

    res.json({ success: true, notification });
  } catch (err) {
    console.error('Error marking notification as read:', err);
    res.status(500).json({ error: 'Failed to update notification' });
  }
};

// 🧹 Optional: Delete a notification
exports.deleteNotification = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Notification.findOneAndDelete({
      _id: id,
      user: req.user.id
    });

    if (!result) {
      return res.status(404).json({ error: 'Notification not found' });
    }

    res.json({ success: true, message: 'Notification deleted' });
  } catch (err) {
    console.error('Error deleting notification:', err);
    res.status(500).json({ error: 'Failed to delete notification' });
  }
};
// trusted-hand/controllers/notificationController.js
