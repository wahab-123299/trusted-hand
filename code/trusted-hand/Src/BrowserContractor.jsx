// client/src/pages/BookContractor.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function BookContractor() {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: "", date: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5000/api/bookings/${id}`, formData);
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert("Booking failed");
    }
  };

  return (
    <div>
      <h2>Book Contractor</h2>

      {/* 🔗 View Full Bio Link */}
      <Link to={`/contractor/${id}`} style={{ display: "block", marginBottom: "1rem" }}>
        View Full Bio
      </Link>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
        <button type="submit">Book Contractor</button>
      </form>
    </div>
  );
}

export default BookContractor;
