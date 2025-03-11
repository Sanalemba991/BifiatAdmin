const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String, // Changed to String to handle different formats
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, // Ensures email is stored in lowercase
  },
  password: {
    type: String,
    required: true,
  },
  upi: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9.\-_]+@[a-zA-Z]+$/, // Basic validation for UPI ID
  },
  wallet_address: {
    type: String, // Explicitly define type
    default: "",
  },
  coins: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("User", userSchema);
