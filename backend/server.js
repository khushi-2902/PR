const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const monumentRoutes=require("./routes/monumentRoutes");
const aiRoutes = require("./routes/aiRoutes");
const authMiddleware= require("./middlewares/authMiddleware");




const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({ message: "You accessed protected route!", user: req.user });
});
app.use("/api/auth", authRoutes);
app.use("/api/monuments", monumentRoutes);
app.use("/api/ai", aiRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("AI Heritage Backend Running");
});




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});