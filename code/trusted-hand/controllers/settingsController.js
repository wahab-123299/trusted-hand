// controllers/settingsController.js

const asyncHandler = require('express-async-handler');
const Settings     = require('../models/Settings');

// @desc    Get current settings (creates defaults if none exist)
// @route   GET /api/settings
// @access  Private (any authenticated user)
exports.getSettings = asyncHandler(async (req, res) => {
  let settings = await Settings.findOne();
  
  if (!settings) {
    settings = await Settings.create({});
  }

  res.json(settings);
});

// @desc    Update settings
// @route   PUT /api/settings
// @access  Admin only
exports.updateSettings = asyncHandler(async (req, res) => {
  const updated = await Settings.findOneAndUpdate(
    {},
    req.body,
    { new: true, upsert: true, runValidators: true }
  );

  res.json(updated);
});
