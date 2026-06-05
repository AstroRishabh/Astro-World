import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to Astro World Dashboard",
    userId: req.user.id
  });
});

export default router;