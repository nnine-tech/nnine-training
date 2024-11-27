const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const adminSchema = new mongoose.Schema({
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
    select: false,
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
  passwordChangedAt: {
    type: Date,
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

//PRE HOOKS TO HASH THE NEWLY CREATED OR UPDATED PASSWORD
adminSchema.pre("save", async function (next) {
  //ONLY RUN THIS FUNCTION IF PASSWORD IS MODIFIED
  if (!this.isModified("password")) return next();

  //PASSWORD HASH
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

  next();
});

adminSchema.pre("save", function (next) {
  //IF PASSWORD IS CHANGED OR NEW DOCUMENT IS CREATED
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 3000;
  next();
});

adminSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

//INSTANCE METHOD TO COMPARE THE HASHED PASSWORD WITH THE INPUT PASSWORD
adminSchema.methods.correctPassword = async function (
  candidatePassword,
  adminPassword
) {
  return await bcrypt.compare(candidatePassword, adminPassword);
};

//INSTANCE METHOD TO CHECK WHETHER PASSWORD HAS BEEN CHANGED AFTER BEING LOGGED IN
adminSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    console.log(JWTTimestamp, changedTimestamp);
    return JWTTimestamp < changedTimestamp;
  }
};

adminSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // console.log({ resetToken }, this.passwordResetToken);
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const Admin = mongoose.model("newAdmin", adminSchema);
module.exports = Admin;
