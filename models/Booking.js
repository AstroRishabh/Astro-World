import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({

  name: String,
  email: String,
  phone: String,

  date: String,
  time: String,

  astrologer: String,

  status: {
    type: String,
    default: "confirmed"
  }

}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);