const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  createMonument,
  getAllMonuments,
  getMonumentById,
  updateMonument,
  deleteMonument
} = require("../controllers/monumentController");

// Protected Routes
router.post("/", authMiddleware, createMonument);
router.put("/:id", authMiddleware, updateMonument);
router.delete("/:id", authMiddleware, deleteMonument);

// Public Routes
router.get("/", getAllMonuments);
router.get("/:id", getMonumentById);

module.exports = router;