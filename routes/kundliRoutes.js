import express from "express";

import {
  matchKundli
} from "../controllers/KundliMilanController.js";

import {
  generateKundli
} from "../controllers/kundliController.js";

import {
  calculateKundli
} from "../services/astrologyService.js";

const router = express.Router();


// ✅ Generate Kundli

router.post(
  "/generate-kundli",
  generateKundli
);


// ✅ Direct Kundli API

router.post(
  "/generate",
  async (req, res) => {

    try {

      const kundli =
        await calculateKundli(req.body);

      res.json(kundli);

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
);


// ✅ Kundli Milan

router.post(
  "/match",
  matchKundli
);


export default router;