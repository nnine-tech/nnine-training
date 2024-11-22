process.on("uncaughtException", (err) => {
  console.log(err);
  console.log(`UNCAUGHT EXCEPTION.......SHUTTING DOWN`);

  process.exit(1);
});

const express = require("express");
const trainerRouter = require("./Routes/trainerRoute");
const trainerReviewRouter = require("./Routes/trainerReviewRoute");
const app = express();
app.use(express.json());
const courseSyllabusRoute = require("./Routes/courseSyllabusRoute");
const studentRoute = require("./Routes/studentRoute");
const eventRoute = require("./Routes/eventRoute");
const notificationRouter = require("./Routes/notificationRoute");
const n9reviewRouter = require("./Routes/n9reviewRoute");

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

//MIDDLEWARES
app.use(express.json());
//BACKEND ROUTE
app.use("/api/v1/syllabus", courseSyllabusRoute);
app.use("/api/v1/trainer", trainerRouter);

//BACKEND ROUTE
app.use("/student", studentRoute);
app.use("/event", eventRoute);
app.use("/notifications", notificationRouter);

app.use("/api/reviews", trainerReviewRouter);
app.use("/api/n9reviews", n9reviewRouter);

module.exports = app;
