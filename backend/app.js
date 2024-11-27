process.on("uncaughtException", (err) => {
  console.log(err);
  console.log(`UNCAUGHT EXCEPTION.......SHUTTING DOWN`);
  process.exit(1);
});

// Importing necessary modules
const http = require("http");
const express = require("express");
const { Server } = require("socket.io");
const dotenv = require("dotenv");
const morgan = require("morgan");

// Importing routes
const trainerRouter = require("./Routes/trainerRoute");
const trainerReviewRouter = require("./Routes/trainerReviewRoute");
const n9reviewRouter = require("./Routes/n9reviewRoute");
const enrollRouter = require("./Routes/enrollRoute");
const feesRoute = require("./Routes/feesRoute");
const fileRouter = require("./Routes/fileRoute");
const courseSyllabusRoute = require("./Routes/courseSyllabusRoute");
const attendanceRoute = require("./Routes/attendanceRoute");
const userSettingRouter = require("./Routes/userSettingRoute");
const studentRoute = require("./Routes/studentRoute");
const contactRouter = require("./Routes/contactRoute");
const courseRoute = require("./Routes/courseRoute");
const adminRoute = require("./Routes/adminRoute");
const notificationRouter = require("./Routes/notificationRoute");
const eventRoute = require("./Routes/eventRoute");
const messageRouter = require("./Routes/messageRoute");

const AppError = require("./Utils/appError");
const globalErrorHandler = require("./Controller/errorController");

// Configure environment variables
dotenv.config({ path: "./config.env" });

// Initialize the app
const app = express();
app.use(express.json());

// Debugging Middleware
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
app.use("/api/v1/courses", courseRoute);
app.use("/api/v1/syllabus", courseSyllabusRoute);
app.use("/api/v1/admin", adminRoute);
app.use("/fees", feesRoute);
app.use("/file", fileRouter);
app.use("/student", studentRoute);
app.use("/api/v1/trainers", trainerRouter);
app.use("/api/v1/trainers-reviews", trainerReviewRouter);
app.use("/api/v1/n9-reviews", n9reviewRouter);
app.use("/api/v1/enroll-now", enrollRouter);
app.use("/api/v1/contact-us", contactRouter);
app.use("/api/v1/message", messageRouter);

// Handle unhandled routes
app.use("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global Error Handler
app.use(globalErrorHandler);

// Export the app
module.exports = app;
