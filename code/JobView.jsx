import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './jobView.css';

// Optional imports for future enhancements
// import JobCard from "../components/JobCard";
// import JobFilter from "../components/JobFilter";
// import BookingWizard from "../components/BookingWizard";
// import AcceptJobButton from "../components/AcceptJobButton";

const JobView = ({ job }) => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    // Simulate fetching jobs
    const mockJobs = [
      {
        id: 1,
        title: "Fix leaking pipe",
        location: "Ikeja",
        profession: "Plumber",
        rank: "Gold",
        date: "2025-08-04"
      },
      {
        id: 2,
        title: "Install ceiling fan",
        location: "Yaba",
        profession: "Electrician",
        rank: "Silver",
        date: "2025-08-05"
      }
    ];
    setJobs(mockJobs);
    setFilteredJobs(mockJobs);
  }, []);

  return (
    <div className="job-view">
      <h2>{job.title}</h2>
      <p><strong>Date:</strong> {job.date}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Client:</strong> {job.client.name} ({job.client.contact})</p>

      <section className="status-block">
        <h3>Status Timeline</h3>
        <ul className="timeline">
          <li>Requested</li>
          <li>Accepted</li>
          <li>In Progress</li>
          <li>Completed</li>
        </ul>
      </section>

      <section className="description">
        <h3>Scope of Work</h3>
        <p>{job.description}</p>
      </section>

      <section className="actions">
        <button>✅ Mark as Completed</button>
        <button>📤 Upload Files</button>
        <button>📨 Message Client</button>
        <button>🧾 Send Invoice</button>
      </section>
    </div>
  );
};

JobView.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    client: PropTypes.shape({
      name: PropTypes.string.isRequired,
      contact: PropTypes.string.isRequired
    }).isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
};

export default JobView;
