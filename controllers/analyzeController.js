import { extractTextFromPDF } from "../services/pdfService.js";

export const analyzeResume = async (req, res) => {
  try {
    console.log("File:", req.file);
    console.log("Body:", req.body);

    if (!req.file) {
      return res.status(400).json({ error: "Resume file is required" });
    }

    const jobDescription = req.body.jobDescription;

    if (!jobDescription) {
      return res.status(400).json({ error: "Job description is required" });
    }

    const resumeText = await extractTextFromPDF(req.file.buffer);

    res.status(200).json({
      message: "PDF parsed successfully",
      resumeLength: resumeText.length,
      preview: resumeText.substring(0, 300),
    });

  } catch (error) {
    console.error("PDF Processing Error:", error);
    res.status(500).json({ error: error.message });
  }
};