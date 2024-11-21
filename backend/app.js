process.on("uncaughtException", (err) => {
  console.log(err);
  console.log(`UNCAUGHT EXCEPTION.......SHUTTING DOWN`);

  process.exit(1);
});

const express = require("express");
const app = express();
app.use(express.json());


app.use(express.static("./public/"));

const courseRoute = require("./Routes/courseRoute");
const feesRoute = require("./Routes/feesRoute");
const userRoute = require("./Routes/userRoute");
const fileRouter = require("./Routes/fileRoute");
const courseSyllabusRoute = require("./Routes/courseSyllabusRoute");

//BACKEND ROUTE
app.use("/api/v1/courses", courseRoute);
app.use("/fees", feesRoute);
app.use("/users", userRoute);
app.use("/file", fileRouter);


const studentRoute = require("./Routes/studentRoute");
const eventRoute = require("./Routes/eventRoute");
const notificationRouter = require("./Routes/notificationRoute");

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

//MIDDLEWARES
app.use(express.json());

//BACKEND ROUTE
app.use("/api/v1/courses", courseRoute);


//BACKEND ROUTE
app.use("/student", studentRoute);




module.exports = app;
