const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['Plumbing', 'Electrical', 'Cleaning', 'Carpentry', 'Painting', 'Other'],
    },
    location: {
      type: String,
      required: true,
    },
    salaryRange: {
      min: { type: Number },
      max: { type: Number },
    },
    employer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: ['Open', 'Closed', 'Paused'],
      default: 'Open',
    },
    applicants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application',
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Job', jobSchema);
