// src/components/Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // Replace with your actual logo path

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <img src={logo} alt="Logo" />
        <h1>TrustedHands</h1>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
          <li><NavLink to="/browse" activeclassname="active">Browse</NavLink></li>
          <li><NavLink to="/job" activeclassname="active">Jobs</NavLink></li>
          <li><NavLink to="/pricing" activeclassname="active">Pricing</NavLink></li>
          <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
