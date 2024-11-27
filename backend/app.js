process.on("uncaughtException", (err) => {
  console.log(err);
  console.log(`UNCAUGHT EXCEPTION.......SHUTTING DOWN`);
  process.exit(1);
});

// Importing necessary modules
const http = require("http"); // Import the http module
const express = require("express");
const { Server } = require("socket.io");
const dotenv = require("dotenv");
const morgan = require("morgan");

// Importing routes
const trainerRouter = require("./Routes/trainerRoute");
const trainerReviewRouter = require("./Routes/trainerReviewRoute");
const n9reviewRouter = require("./Routes/n9reviewRoute");
const enrollRouter = require("./Routes/enrollRoute");
// const feesRoute = require("./Routes/feesRoute");
// const fileRouter = require("./Routes/fileRoute");
const courseSyllabusRoute = require("./Routes/courseSyllabusRoute");
// const attendanceRoute = require("./Routes/attendanceRoute");
// const userSettingRouter = require("./Routes/userSettingRoute");
const studentRoute = require("./Routes/studentRoute");
const globalErrorHandler = require("./Controller/errorController");
const AppError = require("./Utils/appError");
const contactRouter = require("./Routes/contactRoute");

dotenv.config({
  path: "./config.env",
});

const app = express();
app.use(express.json());
console.log(`--------${process.env.NODE_ENV}---------`);

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

// Routes
app.use("/api/v1/syllabus", courseSyllabusRoute);
app.use("/student", studentRoute);
app.use("/api/v1/trainers", trainerRouter);
app.use("/api/v1/trainers-reviews", trainerReviewRouter);
app.use("/api/v1/n9-reviews", n9reviewRouter);
app.use("/api/v1/enroll-now", enrollRouter);
app.use("/api/v1/contact-us", contactRouter);
// Unhandled routes
app.use("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

// Export the app
module.exports = app;
