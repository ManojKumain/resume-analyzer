import healthRoutes from "./routes/healthRoutes.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.use("/", healthRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Backend is running 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});