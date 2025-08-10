const express = require('express');
const router = express.Router();
const { getSettings, updateSettings } = require('../controllers/settingsController');
const { verifyAdmin } = require('../middleware/authMiddleware');

router.get('/', verifyAdmin, getSettings);
router.put('/', verifyAdmin, updateSettings);

module.exports = router;

// Get the most recent settings
router.get('/', async (req, res) => {
  try {
    const latestSettings = await Settings.findOne().sort({ createdAt: -1 });
    if (!latestSettings) {
      return res.status(404).json({ message: 'No settings found' });
    }
    res.json(latestSettings);
  } catch (err) {
    console.error('Error fetching settings:', err);
    res.status(500).json({ error: 'Failed to fetch settings' });
  }
});


// server.js