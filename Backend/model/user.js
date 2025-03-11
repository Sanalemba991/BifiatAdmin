const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  upi: {
    type: String,
    required: true,
  },
  wallet_addresss: {},
  coins: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
});
