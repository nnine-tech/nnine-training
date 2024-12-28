import Joi from "joi";

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  roleId: Joi.string().required(),
  departmentId: Joi.string().required(),
  phone: Joi.string().required(),
  workScheduleId: Joi.string().allow(null),
  photo: Joi.string().allow(null),
  panNo: Joi.string().allow(null),
  address: Joi.string().allow(null),
});

export default userSchema;

const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

export { validateUser };
