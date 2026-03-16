const Monument = require("../models/Monument");

// CREATE Monument (Protected)
exports.createMonument = async (req, res) => {
  try {
    const monument = await Monument.create(req.body);
    res.status(201).json(monument);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET All Monuments
exports.getAllMonuments = async (req, res) => {
  try {
    const { state, category, era } = req.query;

    let filter = {};

    if (state) filter.state = state;
    if (category) filter.category = category;
    if (era) filter.era = era;

    const monuments = await Monument.find(filter);
    res.json(monuments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET Single Monument
exports.getMonumentById = async (req, res) => {
  try {
    const monument = await Monument.findById(req.params.id);
    if (!monument) {
      return res.status(404).json({ message: "Monument not found" });
    }
    res.json(monument);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE Monument (Protected)
exports.updateMonument = async (req, res) => {
  try {
    const monument = await Monument.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!monument) {
      return res.status(404).json({ message: "Monument not found" });
    }

    res.json(monument);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE Monument (Protected)
exports.deleteMonument = async (req, res) => {
  try {
    const monument = await Monument.findByIdAndDelete(req.params.id);

    if (!monument) {
      return res.status(404).json({ message: "Monument not found" });
    }

    res.json({ message: "Monument deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};