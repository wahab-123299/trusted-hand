// profile-card.jsx
import React from 'react';
import './profileCard.css'; // Assuming you have a CSS file for styling

const ProfileCard = () => {
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

export default ProfileCard;
