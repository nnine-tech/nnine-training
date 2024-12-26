import joi from "joi";

const roleSchema = joi.object({
  name: joi.string().required(),
});

export default roleSchema;

const validateRole = (req, res, next) => {
  const { error } = roleSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

export { validateRole };
