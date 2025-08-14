const User = require('../models/user');
const Job = require('../models/job');
const Contractor = require('../models/contractor');
const Application = require('../models/application');

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    await user.deleteOne();
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({ error: 'Failed to delete user' });
  }
};

// Get all jobs
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate('employer', 'name email');
    res.json(jobs);
  } catch (err) {
    console.error('Error fetching jobs:', err);
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
};

// Delete a job by ID
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ error: 'Job not found' });

    await job.deleteOne();
    res.json({ message: 'Job deleted successfully' });
  } catch (err) {
    console.error('Error deleting job:', err);
    res.status(500).json({ error: 'Failed to delete job' });
  }
};

// Get all contractor profiles
exports.getAllContractors = async (req, res) => {
  try {
    const contractors = await Contractor.find().populate('user', 'name email');
    res.json(contractors);
  } catch (err) {
    console.error('Error fetching contractors:', err);
    res.status(500).json({ error: 'Failed to fetch contractors' });
  }
};

// Delete a contractor profile
exports.deleteContractor = async (req, res) => {
  try {
    const contractor = await Contractor.findById(req.params.id);
    if (!contractor) return res.status(404).json({ error: 'Contractor not found' });

    await contractor.deleteOne();
    res.json({ message: 'Contractor profile deleted successfully' });
  } catch (err) {
    console.error('Error deleting contractor:', err);
    res.status(500).json({ error: 'Failed to delete contractor' });
  }
};

// Get all applications
exports.getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate('job', 'title')
      .populate('applicant', 'name email');
    res.json(applications);
  } catch (err) {
    console.error('Error fetching applications:', err);
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
};

// Delete an application
exports.deleteApplication = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) return res.status(404).json({ error: 'Application not found' });

    await application.deleteOne();
    res.json({ message: 'Application deleted successfully' });
  } catch (err) {
    console.error('Error deleting application:', err);
    res.status(500).json({ error: 'Failed to delete application' });
  }
};
