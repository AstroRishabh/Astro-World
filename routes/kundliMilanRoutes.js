import express from "express";

import {
  matchKundli
} from "../controllers/KundliMilanController.js";

const router = express.Router();

router.post(
  "/match",
  matchKundli
);

export default router;