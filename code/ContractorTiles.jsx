// client/src/components/ContractorTile.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ContractorTile.css';

const ContractorTile = ({ contractor }) => {
  const { id, name, photo, trade, rating, guildTier } = contractor;

  return (
    <div className="contractor-card">
      <img src={photo} alt={`${name}'s profile`} className="profile-img" />
      <h3>{name}</h3>
      <p><strong>Trade:</strong> {trade}</p>
      <p><strong>Rating:</strong> ⭐ {rating}</p>
      <span className="guild-badge">{guildTier} Tier</span>

      <div className="action-buttons">
        <Link to={`/contractor/${id}`} className="view-bio-btn">View Full Bio</Link>
        <Link to={`/book/${id}`} className="book-btn">Book Now →</Link>
      </div>
    </div>
  );
};

export default ContractorTile;
