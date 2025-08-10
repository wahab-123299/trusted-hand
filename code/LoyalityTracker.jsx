import React from "react";

const LoyaltyTracker = ({ user }) => {
  const jobsCompleted = user.jobsCompleted;
  const points = jobsCompleted * 200; // ₦200 per job
  const eligible = jobsCompleted >= 5;

  return (
    <div className="loyalty-tracker">
      <h3>Loyalty Rewards</h3>
      <p>Jobs Completed: {jobsCompleted}</p>
      <p>Points Earned: ₦{points}</p>
      {eligible ? (
        <p className="reward">🎉 You’ve earned ₦1,000 off your next booking!</p>
      ) : (
        <p>Complete {5 - jobsCompleted} more jobs to unlock your reward.</p>
      )}
    </div>
  );
};

export default LoyaltyTracker;
import './LoyaltyTracker.css'; // Assuming you have a CSS file for styling