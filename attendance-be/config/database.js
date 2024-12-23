import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || "postgres",
    timezone: "+05:45",
    port: process.env.DB_PORT,
    logging: false,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        ca: process.env.SSL,
      },
    },
  }
);

export default sequelize;
