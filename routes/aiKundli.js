import express from "express";
import { aiKundliAnalysis } from "../controllers/aiKundliController.js";

const router = express.Router();

router.post("/ask-ai", aiKundliAnalysis)
const generateKundli = async () => {
    // Check if coordinates are present
    if (!formData.latitude || !formData.longitude) {
        alert("Bhai, pehle location fetch hone do (Latitude/Longitude are missing)!");
        return;
    }
    
    setLoading(true);
    // ... rest of your fetch code
};

export default router;