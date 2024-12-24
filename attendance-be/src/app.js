import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { errorHandler } from "./middlewares/apiError.js";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "20kb" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));
app.use(morgan("common"));

import departmentRouter from "./routes/department.router.js";

app.use("/api/v1/departments", departmentRouter);

app.use(errorHandler);
app.use("/", (req, res) => {
  res.send("Ok");
});

export { app };
