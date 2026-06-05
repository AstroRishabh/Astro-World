
import { sendBookingEmail } from "../services/emailService.js";

// Create Booking Controller
export const createBooking = async (req, res) => {
    console.log("🔥 API HIT HO GAYI"); 
  try {
    const { name, email, phone, date, time } = req.body;

    // ✅ Create booking object (IMPORTANT)
    const booking = {
      name,
      email,
      phone,
      date,
      time
    };
    

    console.log("New Booking:", booking);
    console.log("REQ BODY:", req.body);

    // ✅ Send Email
    await sendBookingEmail(booking);

    res.json({
      message: "Booking confirmed & email sent",
      booking
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Booking failed"
    });
  }
};
export const getBookedSlots = async (req, res) => {

  const { date } = req.query;

  try {
    const bookings = await Booking.find({ date });

    const bookedSlots = bookings.map(b => b.time);

    res.json({ bookedSlots });

  } catch (err) {
    res.status(500).json({ error: "Failed to fetch slots" });
  }

};