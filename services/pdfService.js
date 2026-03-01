import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pdf = require("pdf-parse");

export const extractTextFromPDF = async (fileBuffer) => {
  const data = await pdf(fileBuffer);
  return data.text;
};