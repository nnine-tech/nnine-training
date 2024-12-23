import sequelize from "../config/database.js";
import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
