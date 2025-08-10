// client/src/components/ContractorProfileCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContractorProfileCard.css'; // Make sure this CSS file exists

const ContractorProfileCard = ({ contractor }) => {
  const navigate = useNavigate();

  return (
    <div
      className="profile-card"
      onClick={() => navigate(`/contractor/${contractor.id}`)}
      style={{ cursor: 'pointer' }}
    >
      <img
        src={contractor.photo || "/images/default-photo.png"}
        alt={contractor.name}
        className="avatar"
      />
      <h3>{contractor.name}</h3>
      <p>{contractor.trade} — {contractor.experience} years</p>
      <p>Jobs: {contractor.completedJobs} | ⭐ {contractor.avgRating}</p>
      <blockquote>{contractor.bio}</blockquote>
    </div>
  );
};

export default ContractorProfileCard;
