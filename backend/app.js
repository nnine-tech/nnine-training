process.on("uncaughtException", (err) => {
  console.log(err);
  console.log(`UNCAUGHT EXCEPTION.......SHUTTING DOWN`);

  process.exit(1);
});

const express = require("express");
const app = express();

app.use(express.json())
const courseRoute = require("./Routes/courseRoute");
const attendenceRouter = require("./Routes/attendenceRouter")

//BACKEND ROUTE
app.use("/api/v1/courses", courseRoute);
app.use("/attendees", attendenceRouter);

app.use(express.json());
const courseSyllabusRoute = require("./Routes/courseSyllabusRoute");

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

//MIDDLEWARES
app.use(express.json());

//BACKEND ROUTE
app.use("/api/v1/courses", courseRoute);
app.use("/api/v1/syllabus", courseSyllabusRoute);
const studentRoute = require("./Routes/studentRoute");

//BACKEND ROUTE
app.use("/api/v1/courses", courseRoute);
app.use("api/v1/student", studentRoute);


module.exports = app;
