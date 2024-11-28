const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config({
  path: "./config.env",
});

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

console.log(DB);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => {
    console.log("DB connection successful!");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1); // Exit if database connection fails
  });

// Handle Mongoose connection errors
mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err.message);
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`APP IS RUNNING AT PORT ${port}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION........SHUTTING DOWN");
  console.error(err.stack || `${err.name}: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});

// Handle process termination (e.g., CTRL+C or system signals)
process.on("SIGTERM", () => {
  console.log("SIGTERM RECEIVED. Shutting down gracefully...");
  server.close(() => {
    console.log("Process terminated!");
  });
});
