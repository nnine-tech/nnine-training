const nodemailer = require("nodemailer");

// IN FUTURE REFACTORATION SENDGRID IS GOING TO BE USED
const sendEmail = async (options) => {
  //CREATE A TRANSPORTER
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  //DEFINE THE EMAIL OPTIONS
  const mailOptions = {
    from: "Bigyan Rai <bigyan@admin.io>",
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html,
  };
  //ACTUALLY SEND THE EMAIL
  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
