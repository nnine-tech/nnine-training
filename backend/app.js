process.on("uncaughtException", (err) => {
  console.log(err);
  console.log(`UNCAUGHT EXCEPTION.......SHUTTING DOWN`);

  process.exit(1);
});

const express = require("express");
const app = express();
const courseRoute = require("./Routes/courseRoute");

//BACKEND ROUTE
app.use("/api/v1/courses", courseRoute);

module.exports = app;
