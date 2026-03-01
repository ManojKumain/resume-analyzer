import express from "express";
import multer from "multer";
import { analyzeResume } from "../controllers/analyzeController.js";

const router = express.Router();

// store file in memory as buffer
const upload = multer({ storage: multer.memoryStorage() });

router.post("/analyze", upload.single("resume"), analyzeResume);

export default router;