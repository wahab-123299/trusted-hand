// Dashboard.jsx
import React from 'react';
import './dashboard.css';

import ProfileCard from './ProfileCard';
import StatsPanel from './StatsPanel';
import Calendar from './Calendar'; // Make sure the file is named Calendar.jsx
import JobHistory from './JobHistory';
import Messages from './Messages';
import EarningsDashboard from './EarningsDashboard'; // Optional: use if needed

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">TrustedHands</aside>
      <main className="dashboard-content">
        <ProfileCard />
        <StatsPanel />
        <Calendar />
        <JobHistory />
        <Messages />
        {/* Optional: Uncomment if you want to show earnings */}
        {/* <EarningsDashboard /> */}
      </main>
    </div>
  );
};

export default Dashboard;
