const joi = require("@hapi/joi");

// validation schema
const schema = joi.object({
  email: joi.string().min(6).required().email(),
  password: joi.string().min(6).required(),
});

// validation fn
const loginValidator = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

module.exports = loginValidator;
