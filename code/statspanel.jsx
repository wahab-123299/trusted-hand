import React from 'react';
import './profileCard.css';

export const ProfileCard = () => {
  const contractor = {
    name: "Oladimeji",
    trade: "Plumber",
    verified: true,
    rating: 4.8,
    jobsCompleted: 27,
    photo: "/assets/contractors/oladimeji.jpg"
  };

  return (
    <div className="profile-card">
      <img src={contractor.photo} alt="Profile" className="profile-photo" />
      <h2>{contractor.name}</h2>
      <p>{contractor.trade}</p>
      {contractor.verified && <span className="badge">✅ Verified</span>}
      <div className="stats">
        <p><strong>{contractor.jobsCompleted}</strong> Jobs Completed</p>
        <p><strong>{contractor.rating} ★</strong> Average Rating</p>
      </div>
    </div>
  );
};

export const StatsPanel = () => {
  const stats = {
    views: 143,
    quotes: 12,
    newReviews: 4,
    jobsCompleted: 27
  };

  return (
    <div className="stats-panel">
      <h3>Your Stats</h3>
      <div className="stat-grid">
        <div className="stat-item">
          <p className="stat-label">Profile Views</p>
          <p className="stat-value">{stats.views}</p>
        </div>
        <div className="stat-item">
          <p className="stat-label">Quote Requests</p>
          <p className="stat-value">{stats.quotes}</p>
        </div>
        <div className="stat-item">
          <p className="stat-label">New Reviews</p>
          <p className="stat-value">{stats.newReviews}</p>
        </div>
        <div className="stat-item">
          <p className="stat-label">Jobs Completed</p>
          <p className="stat-value">{stats.jobsCompleted}</p>
        </div>
      </div>
    </div>
  );
};
