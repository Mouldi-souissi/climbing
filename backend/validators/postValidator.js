const joi = require("@hapi/joi");

const schema = joi.object({
  title: joi.string().max(50).required(),
  content: joi.string().max(5000).required(),
  image: joi.string(),
  userId: joi.string(),
});

const postValidator = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

module.exports = postValidator;
