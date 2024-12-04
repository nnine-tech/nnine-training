const AppError = require("../Utils/appError");
const catchAsync = require("../Utils/catchAsync");
const crypto = require("crypto");
const sendMailVerification = require("./../Utils/email");
const Admin = require("./../Model/newAdminModel");
// const twilio = require("twilio");
// const client = twilio(
//   process.env.TWILIO_ACCOUNT_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );

exports.recoveryVerification = catchAsync(async (req, res, next) => {
  const user = req.admin;
  console.log(user);
  if (!req.body.email && !req.body.phone)
    return next(new AppError("No recovery email or phone number."));
  const { email, phoneNumber } = req.body;

  //VERIFICATION CODE GENERATION
  const emailCode = crypto.randomBytes(16).toString("hex");
  // console.log("----------------");

  console.log(emailCode);
  const phoneCode = crypto.randomInt(100000, 999999);

  // admin = { emailCode, verified: false, type: "email" };
  // tempStore[phoneNumber] = { phoneCode, verified: false, type: "phone" };

  user.emailVerificationStatus = {
    emailCode: emailCode,
    verified: false,
    type: "email",
  };
  await user.save({ validateBeforeSave: false });
  // user.emailCode = emailCode;
  // user.verificationType = "email";
  // user.phoneVerificationStatus = { phoneCode, verified: false, type: "phone" };

  const verificationLink = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/verification/verify-email?token=${emailCode}`;

  // res.json({
  //   message: "success",
  // });

  try {
    await sendMailVerification({
      email: email,
      subject: "Verify your Recovery Email",
      html: `<p>Click <a href="${verificationLink}">here</a> to verify your email.</p>`,
    });
    res.status(200).json({
      status: "success",
      message: "Verification sent to email",
    });
  } catch (error) {
    user.emailVerificationStatus = undefined;
    user.save({ validateBeforeSave: false });
    next(new AppError("Something went wrong while sending mail", 400));
  }
});

exports.verifyEmail = catchAsync(async (req, res, next) => {
  const { token } = req.query;

  console.log(typeof token);
  const admin = await Admin.findOne({
    "emailVerificationStatus.emailCode": token,
  });

  if (!admin) {
    return res.status(400).json({
      status: "failure",
      message: "Invalid or expired token",
    });
  }
  admin.emailVerificationStatus.verified = true;

  await admin.save({ validateBeforeSave: false });

  res.status(200).json({
    status: "succcess",
    message: "Email verified successfully",
  });
});
