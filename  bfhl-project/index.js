const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db/dbConnect");
const bfhlRoutes = require("./routes/bfhl");
require("dotenv").config();

const cors = require("cors")
// Connect to MongoDB
connectDB();

const app = express();
app.use(cors())
app.use(bodyParser.json());

// Routes
app.use("/api", bfhlRoutes);

app.get("/", (req, res)=>{
  return res.send("Hello")
})

// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
