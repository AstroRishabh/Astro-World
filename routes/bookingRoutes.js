import express from "express";
import { createBooking, getBookedSlots } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/create", createBooking);
router.get("/slots", getBookedSlots);

export default router;