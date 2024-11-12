const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({
  path: "./config.env",
});

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successfull!");
  });

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`APP IS RUNNING AT PORT ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION........SHUTTING DOWN");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
