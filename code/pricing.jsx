import React from 'react';
import '.pricing.css';

const PricingTable = ({ pricing }) => {
  return (
    <div className="pricing-table">
      <h3>Service Pricing</h3>
      {pricing.map((item, idx) => (
        <div key={idx} className="pricing-card">
          <h4>{item.category}</h4>
          <p>
            Rate: ₦{item.rate} ({item.type})
          </p>
          {item.notes && <p>{item.notes}</p>}
        </div>
      ))}
      <button className="quote-btn">Request a Quote</button>
    </div>
  );
};

export default PricingTable;
