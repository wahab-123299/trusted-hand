const Contractor = require('../models/contractor');

// Create or update contractor profile
exports.upsertContractorProfile = async (req, res) => {
  try {
    const { skills, bio, location, availability, hourlyRate } = req.body;

    let contractor = await Contractor.findOne({ user: req.user.id });

    if (contractor) {
      // Update existing profile
      contractor.skills = skills || contractor.skills;
      contractor.bio = bio || contractor.bio;
      contractor.location = location || contractor.location;
      contractor.availability = availability || contractor.availability;
      contractor.hourlyRate = hourlyRate || contractor.hourlyRate;

      const updated = await contractor.save();
      return res.json(updated);
    } else {
      // Create new profile
      const newContractor = new Contractor({
        user: req.user.id,
        skills,
        bio,
        location,
        availability,
        hourlyRate,
      });

      const saved = await newContractor.save();
      return res.status(201).json(saved);
    }
  } catch (err) {
    console.error('Error saving contractor profile:', err);
    res.status(500).json({ error: 'Failed to save contractor profile' });
  }
};

// Get contractor profile by ID
exports.getContractorById = async (req, res) => {
  try {
    const contractor = await Contractor.findById(req.params.id).populate('user', 'name email');
    if (!contractor) return res.status(404).json({ error: 'Contractor not found' });
    res.json(contractor);
  } catch (err) {
    console.error('Error fetching contractor:', err);
    res.status(500).json({ error: 'Failed to fetch contractor' });
  }
};

// Get current user's contractor profile
exports.getMyContractorProfile = async (req, res) => {
  try {
    const contractor = await Contractor.findOne({ user: req.user.id }).populate('user', 'name email');
    if (!contractor) return res.status(404).json({ error: 'Profile not found' });
    res.json(contractor);
  } catch (err) {
    console.error('Error fetching profile:', err);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
};

// Delete contractor profile
exports.deleteContractorProfile = async (req, res) => {
  try {
    const contractor = await Contractor.findOne({ user: req.user.id });
    if (!contractor) return res.status(404).json({ error: 'Profile not found' });

    await contractor.deleteOne();
    res.json({ message: 'Contractor profile deleted successfully' });
  } catch (err) {
    console.error('Error deleting profile:', err);
    res.status(500).json({ error: 'Failed to delete profile' });
  }
};
