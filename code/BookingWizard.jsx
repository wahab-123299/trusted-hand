//BookingWizard .js
import React, { useState } from "react";
import './BookingWizard.css';


const BookingWizard = ({ contractor, closeWizard }) => {
  const [serviceType, setServiceType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async () => {
    if (!serviceType || !date || !time) {
      alert("Please fill in all required fields.");
      return;
    }

    const bookingData = {
      contractorId: contractor.id, // or contractor._id depending on your backend
      serviceType,
      date,
      time,
      notes,
    };

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error("Booking failed");
      }

      const result = await response.json();
      console.log("Booking confirmed:", result);
      closeWizard();
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="booking-wizard">
      <h3>Book {contractor.name}</h3>
      <label>
        Service Type:
        <select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
          <option value="">Select</option>
          <option>Plumbing</option>
          <option>Electrical</option>
          <option>Carpentry</option>
          <option>Installation</option>
        </select>
      </label>

      <label>
        Preferred Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>

      <label>
        Time Slot:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>

      <label>
        Special Instructions:
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Describe the job..." />
      </label>

      <button onClick={handleSubmit}>Confirm Booking</button>
      <button onClick={closeWizard}>Cancel</button>
    </div>
  );
};

export default BookingWizard;

