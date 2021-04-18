const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verifyAuth = require("../permissions/verifyAuth");

// register
// public route
router.post("/register", async (req, res) => {
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
router.post("/login", async (req, res) => {
  // check existance
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("invalid credentials");
  // check if psw is corect
  const validpsw = await bcrypt.compare(req.body.password, user.password);
  if (!validpsw) return res.status(400).send("invalid credentials");

  // check if user is not blocked
  if (user.status === "blocked")
    return res.status(401).send("user has been blocked");

  // create token
  const token = jwt.sign(
    { id: user._id, name: user.name, avatar: user.avatar },
    "secret"
  );
  res.header("token", token).send(token);
});

// get user by id
// private route
router.get("/:id", verifyAuth, (req, res) => {
  User.findById(req.params.id)
    .then((profileUser) => {
      res.status(200).send(profileUser);
    })
    .catch((err) => console.log("no such user"));
});

// edit user
// private route
router.put("/edit", verifyAuth, (req, res) => {
  User.findByIdAndUpdate(req.user.id, req.body, { new: true })
    .then((modifiedUser) => res.status(200).send(modifiedUser))
    .catch((err) => console.log(err));
});

module.exports = router;
