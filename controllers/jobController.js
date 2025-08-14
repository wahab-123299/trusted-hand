const Job = require('../models/job');

// Create a new job
exports.createJob = async (req, res) => {
  try {
    const { title, description, category, location, salaryRange } = req.body;

    const job = new Job({
      title,
      description,
      category,
      location,
      salaryRange,
      employer: req.user.id, // assuming req.user is set by authMiddleware
    });

    const savedJob = await job.save();
    res.status(201).json(savedJob);
  } catch (err) {
    console.error('Error creating job:', err);
    res.status(500).json({ error: 'Failed to create job' });
  }
};

// Get all jobs
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    console.error('Error fetching jobs:', err);
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
};

// Get a single job by ID
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.json(job);
  } catch (err) {
    console.error('Error fetching job:', err);
    res.status(500).json({ error: 'Failed to fetch job' });
  }
};

// Update a job
exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ error: 'Job not found' });

    // Optional: check if req.user.id === job.employer
    Object.assign(job, req.body);
    const updatedJob = await job.save();
    res.json(updatedJob);
  } catch (err) {
    console.error('Error updating job:', err);
    res.status(500).json({ error: 'Failed to update job' });
  }
};

// Delete a job
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ error: 'Job not found' });

    // Optional: check if req.user.id === job.employer
    await job.deleteOne();
    res.json({ message: 'Job deleted successfully' });
  } catch (err) {
    console.error('Error deleting job:', err);
    res.status(500).json({ error: 'Failed to delete job' });
  }
};
