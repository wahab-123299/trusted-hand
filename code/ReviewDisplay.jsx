import React from 'react';

const ReviewDisplay = ({ reviews }) => {
  return (
    <div className="review-section">
      <h4>Client Feedback</h4>
      {reviews.map((review, index) => (
        <div key={index} className="review-card">
          <p><strong>{review.name}</strong> ({review.rating}⭐)</p>
          <blockquote>"{review.comment}"</blockquote>
        </div>
      ))}
    </div>
  );
};

export default ReviewDisplay;
