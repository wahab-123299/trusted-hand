// ClientDashboard.jsx
import React from 'react';
import './ClientDashboard.css';

import JobTracker from './JobTracker';
import LoyaltyTracker from './LoyaltyTracker';
import ContractorCard from './ContractorCard';
import ReferralPanel from './ReferralPanel';

const ClientDashboard = ({ client, jobs, ongoing, messages, recommended }) => {
  return (
    <div className="client-dashboard">
      <h2>Welcome, {client.name}</h2>

      <section>
        <h3>📋 Job Requests</h3>
        <JobTracker jobs={jobs} />
      </section>

      <section>
        <h3>🔧 Ongoing Services</h3>
        {ongoing.length > 0 ? (
          ongoing.map((job, index) => (
            <div key={index} className="ongoing-job">
              <p><strong>{job.title}</strong> – {job.status}</p>
            </div>
          ))
        ) : (
          <p>No ongoing services.</p>
        )}
      </section>

      <section>
        <h3>💬 Messages</h3>
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div key={index} className="message">
              <p><strong>{msg.from}:</strong> {msg.text}</p>
            </div>
          ))
        ) : (
          <p>No new messages.</p>
        )}
      </section>

      <section>
        <h3>🌟 Recommended Contractors</h3>
        <div className="recommended-grid">
          {recommended.map((contractor) => (
            <ContractorCard key={contractor.id} contractor={contractor} />
          ))}
        </div>
      </section>

      <section>
        <h3>🎁 Loyalty & Referrals</h3>
        <LoyaltyTracker client={client} />
        <ReferralPanel clientId={client.id} />
      </section>
    </div>
  );
};

export default ClientDashboard;
