
const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  xpThreshold: { type: Number, default: 1000 },
  badgeLimit: { type: Number, default: 10 },
  mentorApplications: { type: Boolean, default: true },
  jobVisibility: { type: String, enum: ['public', 'guild-only'], default: 'public' }
});

module.exports = mongoose.model('Settings', settingsSchema);
// Import the Settings model
