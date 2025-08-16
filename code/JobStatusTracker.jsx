import React from 'react';
import './JobStatusTracker.css'; // Fixed import path

function JobStatusTracker({ status }) {
  const stages = ["Requested", "Accepted", "In Progress", "Completed"];

  return (
    <div className="status-tracker">
      <h4>Job Progress</h4>
      <div className="tracker-bar">
        {stages.map((stage, index) => (
          <div
            key={index}
            className={`stage ${stage === status ? 'active' : ''} ${
              stages.indexOf(status) > index ? 'completed' : ''
            }`}
          >
            {stage}
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobStatusTracker;
