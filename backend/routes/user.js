const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const registerValidator = require("../validators/registerValidator");
const loginValidator = require("../validators/loginValidator");

// register
// public route
router.post("/register", registerValidator, async (req, res) => {
  // hash psw
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  // check if user already exists
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("email already exists");

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const addedUser = await user.save();
    res.send(addedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

// login
// public route
router.post("/login", loginValidator, async (req, res) => {
  // check existance
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("invalid credentials");
  // check if psw is corect
  const validpsw = await bcrypt.compare(req.body.password, user.password);
  if (!validpsw) return res.status(400).send("invalid credentials");
  // create token
  const token = jwt.sign({ id: user._id, name: user.name }, "secret");
  res.header("token", token).send(token);
});

module.exports = router;
