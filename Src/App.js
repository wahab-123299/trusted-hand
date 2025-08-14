// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/navbar";

import BrowseContractor from "./pages/BrowseContractor";
import ContractorProfile from "./pages/ContractorProfile";
import JobView           from "./pages/JobView";
import HomePage          from "./pages/HomePage";
import PricingPage       from "./pages/PricingPage";
import ContactPage       from "./pages/ContactPage";
import BookContractor    from "./pages/BookContractor";

const express = require("express");
const app = express();
const bookingRoutes = require("./routes/bookingRoutes");

app.use(express.json()); // Middleware to parse JSON
app.use("/api", bookingRoutes); // Prefix all booking routes with /api

const logger = require('./utils/logger');

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000', // Adjust this to your frontend URL
  credentials: true // Allow cookies to be sent
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/browse"    element={<BrowseContractor />} />
        <Route path="/book/:id"   element={<BookContractor />} />
        <Route path="/contractor/:id" element={<ContractorProfile />} />
        <Route path="/job/:id" element={<JobView />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
