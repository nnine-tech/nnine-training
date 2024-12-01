const AppError = require("../Utils/appError");

const handleJWTExpired = (err) => {
  const message = `Your token has expired.Please login again!`;
  return new AppError(message, 401);
};

const handleJWTError = (err) => {
  const message = `Invalid JSON web token.Please login again!`;
  return new AppError(message, 401);
};

const handleValidationErrorDB = (err) => {
  const message = `Invalid input data`;
  return new AppError(message, 400);
};

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}:${err.value}`;

  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
  const value = err.errorResponse.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const message = `Duplicate field value: ${value}. Please use another value`;
  // console.log(err);
  // console.log(value);
  return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
  // console.log(err);
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};
const sendErrorProd = (err, res) => {
  //OPERATIONAL ,TRUSTED ERROR, SENT TO CLIENT
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });

    //PROGRAMMING OR UNKNOWN ERROR ,NOT LEAKED TO CLIENT
  } else {
    console.error("-----------ERROR----------", err);

    //GENERING ERROR MESSAGE
    res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};

module.exports = (err, req, res, next) => {
  // console.log(err.stack);
  //SETTING UP DEFAULT STATUS CODE.
  //THERE COULD BE ERROR THAT ARE CREATE BY US WITHOUT STATUS CODE
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = JSON.parse(JSON.stringify(err));

    // console.log(`+++++++++`, error.errors);
    if (error.name === "CastError") error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === "ValidationError")
      error = handleValidationErrorDB(error);
    if (error.name === "JsonWebTokenError") error = handleJWTError(error);
    if (error.name === "TokenExpiredError") error = handleJWTExpired(error);
    sendErrorProd(error, res);
  }
};
