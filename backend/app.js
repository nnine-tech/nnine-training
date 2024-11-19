process.on("uncaughtException", (err) => {
  console.log(err);
  console.log(`UNCAUGHT EXCEPTION.......SHUTTING DOWN`);

  process.exit(1);
});

const express = require("express");
const app = express();
app.use(express.json());
const courseRoute = require("./Routes/courseRoute");
const studentRoute = require("./Routes/studentRoute");

//BACKEND ROUTE
app.use("/courses", courseRoute);
app.use("/student", studentRoute);

module.exports = app;
