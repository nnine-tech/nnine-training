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
import roleRouter from "./routes/role.router.js";
import userRouter from "./routes/user.router.js";
import attendanceRouter from "./routes/attendance.rotuer.js";
import authRouter from "./routes/auth.router.js";
import holidayRouter from "./routes/holiday.router.js";
import workScheduleRouter from "./routes/workSchedule.rouer.js";
import leaveRequestRouter from "./routes/leaveRequest.router.js";

app.use("/api/v1/departments", departmentRouter);
app.use("/api/v1/roles", roleRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/attendance", attendanceRouter);
app.use("/api/v1/holidays", holidayRouter);
app.use("/api/v1/work-schedules", workScheduleRouter);
app.use("/api/v1/leave-requests", leaveRequestRouter);

app.use(errorHandler);
app.use("/", (req, res) => {
  res.send("Ok");
});

export { app };
