import sequelize from "../config/database.js";
import { app } from "./app.js";
import dotenv from "dotenv";
import setUpAssociations from "../models/associations.js";

dotenv.config({
  path: "./.env",
});

sequelize
  .sync({ alter: true })
  .then(() => {
    setUpAssociations();
    console.log("Database synced");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
