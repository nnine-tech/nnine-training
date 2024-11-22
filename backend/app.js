process.on("uncaughtException", (err) => {
  console.log(err);
  console.log(`UNCAUGHT EXCEPTION.......SHUTTING DOWN`);

  process.exit(1);
});

const express = require("express");
const app = express();

app.use(express.json())
const courseRoute = require("./Routes/courseRoute");
const attendanceRouter = require("./Routes/attendanceRouter")


const conversationRouter = require("./Routes/conversation")


//BACKEND ROUTE
app.use("/api/v1/courses", courseRoute);
app.use("/attendance", attendanceRouter,);
app.use("/conversation", conversationRouter)


app.use(express.json());
const courseSyllabusRoute = require("./Routes/courseSyllabusRoute");
const studentRoute = require("./Routes/studentRoute");
const eventRoute = require("./Routes/eventRoute");

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

//MIDDLEWARES
app.use(express.json());

//BACKEND ROUTE
app.use("/api/v1/courses", courseRoute);
app.use("/api/v1/syllabus", courseSyllabusRoute);

//BACKEND ROUTE
app.use("/api/v1/student", studentRoute);
app.use("/event", eventRoute);

module.exports = app;
