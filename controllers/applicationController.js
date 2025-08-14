const Application = require('../models/application');
const Job = require('../models/job');

// Apply to a job
exports.applyToJob = async (req, res) => {
  try {
    const { jobId, coverLetter } = req.body;

    // Check if job exists
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ error: 'Job not found' });

    // Check if user already applied
    const existingApp = await Application.findOne({
      job: jobId,
      applicant: req.user.id,
    });
    if (existingApp) return res.status(400).json({ error: 'Already applied to this job' });

    const application = new Application({
      job: jobId,
      applicant: req.user.id,
      coverLetter,
    });

    const savedApp = await application.save();
    res.status(201).json(savedApp);
  } catch (err) {
    console.error('Error applying to job:', err);
    res.status(500).json({ error: 'Failed to apply to job' });
  }
};

// Get all applications for a job (for employer)
exports.getApplicationsForJob = async (req, res) => {
  try {
    const { jobId } = req.params;

    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ error: 'Job not found' });

    // Optional: check if req.user.id === job.employer
    const applications = await Application.find({ job: jobId }).populate('applicant', 'name email');
    res.json(applications);
  } catch (err) {
    console.error('Error fetching applications:', err);
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
};

// Get applications submitted by the current user
exports.getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({ applicant: req.user.id }).populate('job', 'title location');
    res.json(applications);
  } catch (err) {
    console.error('Error fetching user applications:', err);
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
};

// Update application status (e.g., accepted, rejected)
exports.updateApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const application = await Application.findById(id).populate('job');
    if (!application) return res.status(404).json({ error: 'Application not found' });

    // Optional: check if req.user.id === application.job.employer
    application.status = status;
    const updatedApp = await application.save();
    res.json(updatedApp);
  } catch (err) {
    console.error('Error updating application status:', err);
    res.status(500).json({ error: 'Failed to update status' });
  }
};
