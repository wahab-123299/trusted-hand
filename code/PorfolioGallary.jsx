import React from 'react';
import PropTypes from 'prop-types';
import './PortfolioGallery.css'; // Link to your CSS file

const PortfolioGallery = ({ projects }) => {
  return (
    <div className="portfolio-gallery">
      <h3>🎨 My Portfolio</h3>

      {projects.length === 0 ? (
        <p className="empty-message">No projects to display yet. Stay tuned!</p>
      ) : (
        <div className="gallery-grid">
          {projects.map((project, index) => (
            <div key={index} className="gallery-item">
              <img src={project.image} alt={project.title} />
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

PortfolioGallery.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
};

export default PortfolioGallery;
