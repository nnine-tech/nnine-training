const { config } = require("dotenv");
const nodemailer = require("nodemailer");

config();
const transporterInfo = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "lazyfox916@gmail.com",
    pass: process.env.APP_PASSWORD,
  },
};

exports.sendEmail = async (mailInfo) => {
  try {
    let transporter = nodemailer.createTransport(transporterInfo);
    let info = await transporter.sendMail(mailInfo);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
