import { getHealthStatus } from "../services/healthService.js";

export const healthCheck = (req, res) => {
  const healthData = getHealthStatus();

  res.status(200).json({
    message: "Backend is running 🚀",
    ...healthData
  });
};