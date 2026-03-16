const { GoogleGenAI } = require("@google/genai");
const Monument = require("../models/Monument");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

exports.explainMonument = async (req, res) => {
  try {
    const { monumentId, mode } = req.body;

    const monument = await Monument.findById(monumentId);

    if (!monument) {
      return res.status(404).json({ message: "Monument not found" });
    }

    let prompt = "";

    if (mode === "student") {
      prompt = `Explain the monument ${monument.name} in simple language for school students.`;
    }

    if (mode === "tourist") {
      prompt = `Explain the monument ${monument.name} like a tour guide explaining its history.`;
    }

    if (mode === "exam") {
      prompt = `Give important historical facts about ${monument.name} suitable for exam preparation.`;
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt
    });

    res.json({
      monument: monument.name,
      mode: mode,
      explanation: response.text
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//generating quiz
exports.generateQuiz = async (req, res) => {
  try {
    const { monumentId, mode } = req.body;

    const monument = await Monument.findById(monumentId);

    if (!monument) {
      return res.status(404).json({ message: "Monument not found" });
    }

    let prompt = "";

    if (mode === "student") {
      prompt = `
      Generate 5 easy multiple choice questions about ${monument.name}.
      Suitable for school students.
      Include 4 options and correct answer.
      `;
    }

    if (mode === "tourist") {
      prompt = `
      Generate 5 fun trivia questions about ${monument.name}.
      These should be interesting facts tourists would enjoy.
      Include 4 options and correct answer.
      `;
    }

    if (mode === "exam") {
      prompt = `
      Generate 5 challenging multiple choice questions about ${monument.name}.
      These should focus on historical facts suitable for exam preparation.
      Include 4 options and correct answer.
      `;
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt
    });

    res.json({
      monument: monument.name,
      mode: mode,
      quiz: response.text
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//generatingSummary
exports.generateSummary = async (req, res) => {
  try {
    const { monumentId, mode } = req.body;

    const monument = await Monument.findById(monumentId);

    if (!monument) {
      return res.status(404).json({ message: "Monument not found" });
    }

    let prompt = "";

    if (mode === "student") {
      prompt = `
      Explain ${monument.name} in 5 simple bullet points suitable for school students.
      `;
    }

    if (mode === "tourist") {
      prompt = `
      Give 5 interesting facts about ${monument.name} that tourists should know.
      `;
    }

    if (mode === "exam") {
      prompt = `
      Summarize ${monument.name} in 5 important bullet points for quick exam revision.
      `;
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt
    });

    res.json({
      monument: monument.name,
      mode: mode,
      summary: response.text
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};