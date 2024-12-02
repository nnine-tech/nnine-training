process.on("uncaughtException", (err) => {
  console.log(err);
  console.log(`UNCAUGHT EXCEPTION.......SHUTTING DOWN`);
  process.exit(1);
});

// Importing necessary modules
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const http = require("http");
const { Server } = require("socket.io");
const globalErrorHandler = require("./Controller/errorController");

// Importing routes
const trainerRouter = require("./Routes/trainerRoute");
const trainerReviewRouter = require("./Routes/trainerReviewRoute");
const n9reviewRouter = require("./Routes/n9reviewRoute");
const feesRoute = require("./Routes/feesRoute");
const fileRouter = require("./Routes/fileRoute");
const attendanceRoute = require("./Routes/attendanceRoute");
const userSettingRouter = require("./Routes/userSettingRoute");
const studentRoute = require("./Routes/studentRoute");
const notificationRouter = require("./Routes/notificationRoute");
const messageRouter = require("./Routes/messageRoute");
const courseRoute = require("./Routes/courseRoute");
const courseSyllabusRoute = require("./Routes/courseSyllabusRoute");
const adminRoute = require("./Routes/adminRoute");
const verificationRoute = require("./Routes/verificationRoute");
const AppError = require("./Utils/appError");
const globalErrorHandler = require("./Controller/errorController");
const contactRouter = require("./Routes/contactRoute");
const enrollRouter = require("./Routes/enrollRoute");
const eventRouter = require("./Routes/eventRoute");
const AppError = require("./Utils/appError");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DEBUGGING PURPOSE//MIDDLEWARES
app.use(helmet());

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP,please try again in an hour!",
});

app.use("/api", limiter);

app.use(mongoSanitize());

app.use(xss());

console.log(`----------${process.env.NODE_ENV}------------`);

//PREVENT PARAMETER POLLUTION
app.use(
  hpp({
    whitelist: ["duration", "category", "lectures"],
  })
);

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Log requests in development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Create the HTTP server
const httpServer = http.createServer(app);

// Set up socket.io
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("sendMessage", (message) => {
    socket.broadcast.emit("receiveMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Backend Routes

app.use("/api/v1/course", courseRoute);
app.use("/api/v1/admin", adminRoute);
app.use("/api/v1/syllabus", courseSyllabusRoute);
app.use("/api/v1/verification", verificationRoute);
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/events", eventRouter);
app.use("/api/v1/trainers", trainerRouter);
app.use("/api/v1/trainers-reviews", trainerReviewRouter);
app.use("/api/v1/n9-reviews", n9reviewRouter);
app.use("/api/v1/enroll-now", enrollRouter);
app.use("/api/v1/contact-us", contactRouter);
app.use("/api/v1/fees", feesRoute);
app.use("/api/v1/file", fileRouter);

// Handle unhandled routes
app.use("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global Error Handler
app.use(globalErrorHandler);

// Export the app
module.exports = app;
