import React from "react";
import './ReviewSection.css'; // ✅ Corrected import path

const ReviewSection = ({ reviews }) => {
  return (
    <div className="review-section">
      <h3>Client Reviews</h3>
      {reviews.map((review, idx) => (
        <div key={idx} className="review-card">
          <p className="review-text">"{review.text}"</p>
          <div className="stars">
            {"★".repeat(review.rating)}
          </div>
          <small className="review-meta">
            {review.date} – {review.client}
          </small>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
