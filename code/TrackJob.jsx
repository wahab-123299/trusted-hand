// TrackJob.jsx

import React from 'react';

const TrackJob = () => {
  const jobStatus = "in progress"; // Replace with API call or prop

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🧵 Job Status: <span style={styles.status}>{jobStatus}</span></h2>
      {jobStatus === "in progress" && (
        <p style={styles.message}>Your contractor is working on it! 🛠️</p>
      )}
      {jobStatus === "completed" && (
        <p style={styles.message}>Your job has been completed! 🎉</p>
      )}
      {jobStatus === "pending" && (
        <p style={styles.message}>Awaiting contractor confirmation. ⏳</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#fdfdfd',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    maxWidth: '600px',
    margin: '30px auto',
    fontFamily: 'Segoe UI, sans-serif',
  },
  heading: {
    fontSize: '1.5em',
    color: '#1e88e5',
  },
  status: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  message: {
    marginTop: '10px',
    fontSize: '1em',
    color: '#444',
  },
};

export default TrackJob;
