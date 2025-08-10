//earningsdashboard.jsx
import React from 'react';
import './Earningsdashboard.css'; // Assuming you have a CSS file for styling


const EarningsDashboard = () => {
  const totalEarnings = 95000;
  const monthlyEarnings = {
    July: 25000,
    June: 40000,
    May: 30000
  };

  const jobPayments = [
    { title: "Fix Kitchen Tap", amount: "₦10,000" },
    { title: "Install AC Unit", amount: "₦25,000" },
    { title: "Electrical Wiring", amount: "₦15,000" }
  ];

  return (
    <div className="earnings-dashboard">
      <h3>Total Earnings</h3>
      <p className="total-amount">₦{totalEarnings}</p>

      <h4>Monthly Breakdown</h4>
      <ul>
        {Object.entries(monthlyEarnings).map(([month, amount], index) => (
          <li key={index}>{month}: ₦{amount}</li>
        ))}
      </ul>

      <h4>Job-wise Earnings</h4>
      <ul>
        {jobPayments.map((job, index) => (
          <li key={index}>
            {job.title} - <strong>{job.amount}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default EarningsDashboard;
