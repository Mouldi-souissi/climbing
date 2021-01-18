const router = require("express").Router();
const User = require("../models/User");

// get all users
// private route
router.get("/users", (req, res) => {
  User.find()
    .then((users) => res.status(200).send(users))
    .catch((err) => console.log(err));
});

// block and unblock user
// private route
router.put("/bloc:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((user) => res.status(200).send(user))
    .catch((err) => console.log(err));
});

module.exports = router;
