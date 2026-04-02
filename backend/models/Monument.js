const mongoose = require("mongoose");

const monumentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  era: {
    type: String
  },
  category: {
    type: String
  },
  builtBy: {
    type: String
  },
  year: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String
  },

  //newFields are added for more data
  about: {
    type: String
  },
  history: {
    type: String
  },
  architecture: {
    type: String
  },
  culturalSignificance: {
    type: String
  },
  highlights: [
    {
      type: String
    }
  ],
  facts: [
    {
      type: String
    }
  ]

}, { timestamps: true });

module.exports = mongoose.model("Monument", monumentSchema);