// JobHistory.jsx
import React from 'react';
import './jobHistory.css'; // Assuming you have a CSS file for styling

const JobHistory = () => {
  const jobs = [
    {
      title: "Fix Kitchen Tap",
      date: "2025-07-23",
      feedback: "Great work, very professional!",
      rating: 5,
      earnings: "₦10,000"
    },
    {
      title: "Electrical Wiring",
      date: "2025-07-20",
      feedback: "Completed on time and neatly done.",
      rating: 4,
      earnings: "₦15,000"
    }
  ];

  return (
    <div className="job-history">
      <h3>Completed Jobs</h3>
      {jobs.map((job, index) => (
        <div key={index} className="job-card">
          <h4>{job.title}</h4>
          <p><strong>Date:</strong> {job.date}</p>
          <p><strong>Feedback:</strong> {job.feedback}</p>
          <p><strong>Rating:</strong> ⭐ {job.rating}/5</p>
          <p><strong>Earnings:</strong> {job.earnings}</p>
        </div>
      ))}
    </div>
  );
};

export default JobHistory;
