// bookingController.js
exports.createBooking = async (req, res) => {
  const { contractorId, serviceType, date, time, notes } = req.body;

  try {
    // Replace with actual DB logic
    const newBooking = {
      contractorId,
      serviceType,
      date,
      time,
      notes,
      createdAt: new Date(),
    };

    console.log("Booking received:", newBooking);
    res.status(201).json({ message: "Booking successful", booking: newBooking });
  } catch (error) {
    res.status(500).json({ error: "Failed to create booking" });
  }
};
