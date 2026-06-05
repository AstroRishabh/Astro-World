import mongoose from "mongoose";

const kundliSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  name: String,
  date: String,
  time: String,
  place: String,
  latitude: Number,
  longitude: Number,
  lagna: String,
  planets: Object
}, { timestamps: true });

export default mongoose.model("Kundli", kundliSchema);