import React from "react";
import './JobTracker.css'; // Assuming you have a CSS file for styling

const JobTracker = ({ job }) => {
  const statusColors = {
    "Accepted": "#ffeb3b",
    "En Route": "#29b6f6",
    "Working": "#66bb6a",
    "Completed": "#9e9e9e"
  };

  return (
    <div className="job-tracker">
      <h3>Job: {job.serviceType}</h3>
      <p>Contractor: {job.contractorName}</p>
      <p>Date: {job.date} • Time: {job.time}</p>
      <p>Status: <span style={{ color: statusColors[job.status] }}>{job.status}</span></p>

      {job.status === "Working" && (
        <p>Started at: {job.startTime}</p>
      )}

      {job.status === "Completed" && (
        <button className="review-btn">Leave a Review</button>
      )}
    </div>
  );
};
import React, { useEffect, useState } from "react";
import JobTracker from "./JobTracker";

const ClientDashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Simulate fetching jobs from an API
    const mockJobs = [
      {
        id: 1,
        serviceType: "Plumbing",
        contractorName: "John Doe",
        date: "2025-08-02",
        time: "10:00 AM",
        status: "Working",
        startTime: "10:15 AM"
      },
      {
        id: 2,
        serviceType: "Electrical",
        contractorName: "Jane Smith",
        date: "2025-08-01",
        time: "2:00 PM",
        status: "Completed"
      }
    ];
    setJobs(mockJobs);
  }, []);

  return (
    <div className="client-dashboard">
      <h2>Welcome back!</h2>
      <h4>Your Active Jobs</h4>

      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        jobs.map((job) => (
          <JobTracker key={job.id} job={job} />
        ))
      )}
    </div>
  );
};

export default ClientDashboard;
