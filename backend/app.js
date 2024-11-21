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
//BACKEND ROUTE

app.use("/api/v1/trainers", trainerRouter);

app.use("/api/reviews", trainerReviewRouter);
module.exports = app;
