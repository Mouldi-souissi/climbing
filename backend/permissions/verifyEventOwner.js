const Event = require("../models/Event");

module.exports = (req, res, next) => {
  Event.findById(req.params.id).then((err, event) => {
    if (err) return res.status("404").send("no such event");
    // populating user
    // event.populate({ path: "creator", model: "user" });
    if (event.creator.toString() !== req.user.id) {
      res.status(401).send("you dont have access");
    } else {
      next();
    }
  });
};
