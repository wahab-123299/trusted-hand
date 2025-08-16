import React from "react";
import '.ReferralPanel.css';

const ReferralPanel = ({ user }) => {
  const referralLink = `https://trustedhands.ng/ref/${user.id}`;

  return (
    <div className="referral-panel">
      <h3>Refer & Earn</h3>
      <p>Share your link and earn ₦2,000 when someone books:</p>
      <input type="text" value={referralLink} readOnly />
      <button onClick={() => navigator.clipboard.writeText(referralLink)}>
        📋 Copy Link
      </button>
    </div>
  );
};

export default ReferralPanel;
import './ReferralPanel.css'; // Assuming you have a CSS file for styling