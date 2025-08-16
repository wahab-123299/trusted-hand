import React, { useState } from "react";
import BookingWizard from "./BookingWizard";
import PropTypes from "prop-types";
import "./ContractorBio.css";

const ContractorBioPage = ({ contractor }) => {
  const [showBooking, setShowBooking] = useState(false);

  if (!contractor) return <p>Contractor data not available.</p>;

  const {
    name,
    photo,
    trade,
    location,
    guildTier,
    rating,
    reviewCount,
    bio,
    services = [],
    languages = [],
    portfolio = [],
  } = contractor;

  return (
    <div className="contractor-bio">
      <header className="bio-header">
        <img
          src={photo || "/default-avatar.png"}
          alt={name || "Contractor"}
          className="contractor-photo"
        />
        <div>
          <h2>{name}</h2>
          <p>{trade} • {location}</p>
          {guildTier && (
            <span className={`guild-badge ${guildTier.toLowerCase()}`}>
              {guildTier} Guild Member 🛡️
            </span>
          )}
          <p>⭐ {rating} ({reviewCount} reviews)</p>
        </div>
      </header>

      <section className="bio-body">
        <h3>About</h3>
        <p>{bio || "No bio available."}</p>

        <h3>Services Offered</h3>
        <ul>
          {services.length > 0 ? services.map((service, idx) => (
            <li key={idx}>{service}</li>
          )) : <li>No services listed.</li>}
        </ul>

        <h3>Languages Spoken</h3>
        <p>{languages.length > 0 ? languages.join(", ") : "Not specified."}</p>

        <h3>Portfolio</h3>
        <div className="portfolio-gallery">
          {portfolio.length > 0 ? portfolio.map((img, idx) => (
            <img key={idx} src={img} alt={`Portfolio image ${idx + 1}`} />
          )) : <p>No portfolio images available.</p>}
        </div>

        <button
          onClick={() => setShowBooking(true)}
          disabled={showBooking}
          className="book-button"
        >
          📅 Book Now
        </button>
      </section>

      {showBooking && (
        <BookingWizard
          contractor={contractor}
          closeWizard={() => setShowBooking(false)}
        />
      )}
    </div>
  );
};

ContractorBioPage.propTypes = {
  contractor: PropTypes.shape({
    name: PropTypes.string,
    photo: PropTypes.string,
    trade: PropTypes.string,
    location: PropTypes.string,
    guildTier: PropTypes.string,
    rating: PropTypes.number,
    reviewCount: PropTypes.number,
    bio: PropTypes.string,
    services: PropTypes.arrayOf(PropTypes.string),
    languages: PropTypes.arrayOf(PropTypes.string),
    portfolio: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default ContractorBioPage;
