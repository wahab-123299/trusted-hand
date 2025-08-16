import React from 'react';
import { NavLink } from 'react-router-dom';
import handsLogo from '../assets/hands.png'; // Make sure this image exists

function Navbar() {
  return (
    <header>
      <div className="logo">
        <img src={handsLogo} alt="TrustedHand Logo" style={{ width: '80px', height: '100px' }} />
        <h1>TrustedHands</h1>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/browse">Browse Contractors</NavLink></li>
          <li><NavLink to="/dashboard" className="active">Dashboard</NavLink></li>
          <li><NavLink to="/jobs">Jobs</NavLink></li>
          <li><NavLink to="/pricing">Pricing</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
