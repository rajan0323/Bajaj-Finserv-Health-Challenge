const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  email: { type: String, required: true },
  roll_number: { type: String, required: true },
  numbers: { type: [String], required: true },
  alphabets: { type: [String], required: true },
  highest_lowercase_alphabet: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
