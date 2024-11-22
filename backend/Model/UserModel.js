const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
  },
  position: {
    type: String,
    required: [true, "Position is required"],
  },
  //KATHMANDU,NEPAL
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  phone: {
    type: Number,
    required: [true, "Phone number is required"],
    match: [/^\d{10}$/, "Phone number must be exactly 10 digits"],
  },
  email: {
    type: String,
    required: [true, "Please tell us your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: String,
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],

    //NOTE:: ONLY WORKS FOR CREATE AND SAVE
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same",
    },
  },
  bio: {
    type: String,
    maxLength: 1000,
  },

  taxId: {
    type: Number,
  },
  role: {
    type: String,
    enum: ["super-admin", "admin"],
    default: "admin",
  },
  
});

const User = mongoose.model("User", userSchema);
module.exports = User;
