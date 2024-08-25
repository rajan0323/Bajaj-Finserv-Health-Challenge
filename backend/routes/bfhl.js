const express = require("express");
const router = express.Router();
const User = require("../models/User");

// POST /bfhl - Main Logic
router.post("/bfhl", async (req, res) => {
  try {
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid data format" });
    }

    const user_id = "john_doe_17091999";
    const email = "john@xyz.com";
    const roll_number = "ABCD123";
    
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    
    const lowercaseAlphabets = alphabets.filter(item => /^[a-z]$/.test(item));
    const highestLowercase = lowercaseAlphabets.sort().pop() || "";

    const newUser = new User({
      user_id,
      email,
      roll_number,
      numbers,
      alphabets,
      highest_lowercase_alphabet: highestLowercase
    });

    await newUser.save();

    return res.status(200).json({
      is_success: true,
      user_id,
      email,
      roll_number,
      numbers,
      alphabets,
      highest_lowercase_alphabet: [highestLowercase],
    });
  } catch (error) {
    return res.status(500).json({ is_success: false, message: "Internal Server Error" });
  }
});

// GET /bfhl - Returns operation code
router.get("/bfhl", (req, res) => {
  return res.status(200).json({ operation_code: 1 });
});

module.exports = router;
