const mongoose = require('mongoose');

const contractorSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    skills: {
      type: [String],
      default: [],
    },
    experience: {
      type: String,
      trim: true,
    },
    hourlyRate: {
      type: Number,
      min: 0,
    },
    availability: {
      type: String,
      enum: ['Full-time', 'Part-time', 'Freelance'],
      default: 'Freelance',
    },
    location: {
      type: String,
      trim: true,
    },
    profilePictureUrl: {
      type: String, // optional: link to uploaded profile image
    },
    bio: {
      type: String,
      trim: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Contractor', contractorSchema);
