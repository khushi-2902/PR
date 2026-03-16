const express = require("express");
const router = express.Router();

const { explainMonument, generateQuiz, generateSummary } = require("../controllers/aiController");

router.post("/explain", explainMonument);
router.post("/quiz", generateQuiz);
router.post("/summary", generateSummary);

module.exports = router;