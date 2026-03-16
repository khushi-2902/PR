require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Monument = require("../models/Monument");

dotenv.config();

const monuments = [
  {
    name: "Taj Mahal",
    state: "Uttar Pradesh",
    era: "Mughal",
    category: "Mausoleum",
    builtBy: "Shah Jahan",
    year: "1653",
    description: "A white marble mausoleum built in memory of Mumtaz Mahal.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg"
  },
  {
    name: "Qutub Minar",
    state: "Delhi",
    era: "Delhi Sultanate",
    category: "Tower",
    builtBy: "Qutb-ud-din Aibak",
    year: "1193",
    description: "One of the tallest brick minarets in the world.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Qutb_Minar_tower.jpg"
  },
  {
    name: "Red Fort",
    state: "Delhi",
    era: "Mughal",
    category: "Fort",
    builtBy: "Shah Jahan",
    year: "1648",
    description: "Historic fort that served as the residence of Mughal emperors.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Red_Fort%2C_Delhi.jpg"
  },
  {
    name: "Konark Sun Temple",
    state: "Odisha",
    era: "Eastern Ganga Dynasty",
    category: "Temple",
    builtBy: "King Narasimhadeva I",
    year: "1250",
    description: "Temple dedicated to the Sun God designed like a chariot.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Konark_Sun_Temple_-_Front_View.jpg"
  },
  {
    name: "Hampi",
    state: "Karnataka",
    era: "Vijayanagara Empire",
    category: "Ancient City",
    builtBy: "Vijayanagara Kings",
    year: "14th Century",
    description: "UNESCO World Heritage Site known for temples and ruins.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Virupaksha_Temple_Hampi.jpg"
  }
];
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");

    await Monument.deleteMany();
    console.log("Old monuments removed");

    await Monument.insertMany(monuments);
    console.log("Sample monuments inserted");

    process.exit();
  })
  .catch((err) => {
    console.log(err);
  });

  