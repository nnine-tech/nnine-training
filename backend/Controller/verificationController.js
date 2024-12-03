const AppError = require("../Utils/appError");
const catchAsync = require("../Utils/catchAsync");
const crypto = require("crypto");
const sendMailVerification = require("./../Utils/email");
const Admin = require("./../Model/newAdminModel");
const twilio = require("twilio");
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

exports.recoveryEmailVerification = catchAsync(async (req, res, next) => {
  const user = req.admin;
  console.log(user);
  if (!req.body.email)
    return next(new AppError("No recovery email or phone number."));
  const { email } = req.body;

  //VERIFICATION CODE GENERATION
  const emailCode = crypto.randomBytes(16).toString("hex");
  // console.log("----------------");

  // console.log(emailCode);

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
  )}/api/v1/verification/verify-email?token=${emailCode}&email=${email}`;

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
    await user.save({ validateBeforeSave: false });
    next(
      new AppError("Something went wrong while sending verification token", 400)
    );
  }
});

exports.verifyEmail = catchAsync(async (req, res, next) => {
  const { token, email } = req.query;

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
  admin.emailVerificationStatus.emailCode = undefined;
  admin.recoveryEmail = email;
  await admin.save({ validateBeforeSave: false });

  res.status(200).json({
    status: "succcess",
    message: "Email verified successfully",
  });
});

// exports.recoveryPhoneVerification = catchAsync(async (req, res, next) => {
//   const user = req.admin;

//   const { phone } = req.body;
//   const phoneCode = crypto.randomInt(100000, 999999);

//   console.log(phone);
//   user.phoneVerificationStatus = {
//     phoneCode: phoneCode,
//     verified: false,
//     type: "phone",
//   };
//   await user.save({ validateBeforeSave: false });

//   try {
//     await client.messages.create({
//       body: `Your verification code is ${phoneCode}`,
//       from: "+9779813199661",
//       to: `+977${phone}`,
//     });
//     res.status(200).json({
//       status: "success",
//       message: "Verification sent to number",
//     });
//   } catch (error) {
//     user.phoneVerificationStatus = undefined;
//     await user.save({ validateBeforeSave: false });
//     console.log(error);
//     res.status(400).json({
//       status: "failure",
//       message:
//         "Something went wrong while sending Verification token sent to number",
//     });
//   }
// });
