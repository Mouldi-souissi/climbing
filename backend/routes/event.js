const router = require("express").Router();
const Event = require("../models/Event");
const verifyAuth = require("../permissions/verifyAuth");
const verifyEventOwner = require("../permissions/verifyEventOwner");

// create event
// private route
router.post("/add", verifyAuth, async (req, res) => {
  const event = new Event({
    name: req.body.name,
    date: req.body.date,
    destination: req.body.destination,
    creator: req.user.id,
    image: req.body.image,
  });
  try {
    const addedEvent = await event.save();
    res.status(200).send(addedEvent);
  } catch (err) {
    console.log(err);
  }
});

// get all events
// private route
router.get("/", verifyAuth, (req, res) => {
  Event.find()
    .populate({ path: "creator", model: "user" })
    .then((events) => {
      res.status(200).send(events);
    })
    .catch((err) => res.send(err));
});

// get event by id
// private route
router.get("/:id", verifyAuth, (req, res) => {
  Event.findById(req.params.id)
    .populate({ path: "creator", model: "user" })
    .then((event) => {
      res.status(200).send(event);
    })
    .catch((err) => res.send(err));
});

// edit event
// private, verify owner
router.put("/edit:id", verifyAuth, verifyEventOwner, (req, res) => {
  Event.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((event) => res.send(event))
    .catch((err) => res.send(err));
});

// delete event
// private route, verify owner
router.delete("/delete:id", verifyAuth, (req, res) => {
  Event.findByIdAndDelete(req.params.id)
    .then((deletedEvent) =>
      res.status(200).send({ msg: "event has been deleted", deletedEvent })
    )
    .catch((err) => res.send(err));
});

// participate
// private route
router.put("/participate:id", verifyAuth, async (req, res) => {
  const actualEvent = await Event.findById(req.params.id);
  actualEvent.participants.push({ user: req.user.id, will: req.body.will });
  actualEvent
    .save()
    .then(() => res.status(200).send("paticipant added"))
    .catch((err) => res.send(err));
});

module.exports = router;
