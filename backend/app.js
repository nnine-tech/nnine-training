process.on("uncaughtException", (err) => {
  console.log(err);
  console.log(`UNCAUGHT EXCEPTION.......SHUTTING DOWN`);

  process.exit(1);
});

//IMPORTING
const express = require("express");
const app = express();
app.use(express.json());
const AppError = require("./Utils/appError");
const globalErrorHandler = require("./Controller/errorController");
const dotenv = require("dotenv");
const morgan = require("morgan");
const notificationRouter = require("./Routes/notificationRoute");
const courseRoute = require("./Routes/courseRoute");
const feesRoute = require("./Routes/feesRoute");
const fileRouter = require("./Routes/fileRoute");
const courseSyllabusRoute = require("./Routes/courseSyllabusRoute");
const studentRoute = require("./Routes/studentRoute");
const eventRoute = require("./Routes/eventRoute");
const userRoute = require("./Routes/userroute");
const adminRoute = require("./Routes/adminRoute");

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log("From app line no 28", req.headers);
  console.log(req.body);

  next();
});

//BACKEND ROUTE
app.use("/api/v1/courses", courseRoute);
app.use("/api/v1/syllabus", courseSyllabusRoute);
app.use("/api/v1/admin", adminRoute);

app.use("/fees", feesRoute);
app.use("/users", userRoute);
app.use("/file", fileRouter);
app.use("/api/v1/users", userRoute);
app.use("/student", studentRoute);

dotenv.config({
  path: "./config.env",
});

// console.log(process.env);
console.log(`--------${process.env.NODE_ENV}---------`);
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

//MIDDLEWARES

//BACKEND ROUTE

//UNHANDLED ROUTE
app.use("*", (req, res, next) => {
  //ORIGINAL METHOD

  // res.status(404).json({
  //   status: "fail",
  //   message: `Can't find ${req.originalUrl} on this server!`,
  // });

  // GLOBAL ERROR HANDLING IMPLEMENTATION

  //BEFORE IMPLEMENTING APPERROR

  // const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  // err.status = "fail";
  // err.statusCode = 404;

  //AFTER IMPLEMENTING APP ERROR

  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(express.static(`${__dirname}/public`));

//GLOBAL ERROR HANDLER
app.use(globalErrorHandler);

module.exports = app;
