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

//BACKEND ROUTE
app.use("/api/v1/courses", courseRoute);
app.use("/fees", feesRoute);
app.use("/users", userRoute);
app.use("/file", fileRouter);
module.exports = app;
