import joi from "joi";

const leaveRequestSchema = joi.object({
  startDate: joi.date().required(),
  endDate: joi.date().required(),
  reason: joi.string().required(),
});

export default leaveRequestSchema;

const validateLeaveRequest = (req, res, next) => {
  const { error } = leaveRequestSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

export { validateLeaveRequest };
