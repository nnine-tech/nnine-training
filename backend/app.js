process.on("uncaughtException", (err) => {
  console.log(err);
  console.log(`UNCAUGHT EXCEPTION.......SHUTTING DOWN`);

  process.exit(1);
});

const express = require("express");
const app = express();
app.use(express.json());
const courseRoute = require("./Routes/courseRoute");
const feesRoute = require("./Routes/feesRoute");
//BACKEND ROUTE
app.use("/api/v1/courses", courseRoute);
app.use("/fees", feesRoute);
module.exports = app;
