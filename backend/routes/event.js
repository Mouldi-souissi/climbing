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
    description: req.body.description,
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
    .populate({ path: "participants.user", model: "user" })
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
    .populate({ path: "participants.user", model: "user" })
    .then((event) => {
      res.status(200).send(event);
    })
    .catch((err) => res.send(err));
});

// edit event
// private, verify owner
router.put("/edit:id", verifyAuth, (req, res) => {
  Event.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .populate({ path: "creator", model: "user" })
    .populate({ path: "participants.user", model: "user" })
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
  const actualEvent = await Event.findById(req.params.id)
    .populate({ path: "creator", model: "user" })
    .populate({ path: "participants.user", model: "user" });

  const participated = actualEvent.participants.find((participant) =>
    participant.user.toString()
  );

  if (participated) {
    actualEvent.participants.pull(participated._id);
    actualEvent
      .save()
      .then((event) => res.status(200).send(event))
      .catch((err) => res.send(err));
  } else {
    actualEvent.participants.push({ user: req.user.id, will: req.body.will });
    actualEvent
      .save()
      .then((event) => res.status(200).send(event))
      .catch((err) => res.send(err));
  }
});

// rate event
// private route
router.put("/rate:id", verifyAuth, (req, res) => {
  Event.findById(req.params.id)
    .then((event) => {
      event.rating = {
        raters: event.rating.raters + 1,
        total: event.rating.total + req.body.rating,
        result:
          (event.rating.total + req.body.rating) / (event.rating.raters + 1),
      };
      // event.rating = {};
      event.save();
      res.send("done");
    })
    .catch((err) => console.log(err));
});

module.exports = router;
