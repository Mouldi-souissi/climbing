const router = require("express").Router();
const Item = require("../models/Item");
const verifyAuth = require("../permissions/verifyAuth");
const verifyItemOwner = require("../permissions/verifyItemOwner");

// get all items
// private route
router.get("/", verifyAuth, (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .populate({ path: "seller", model: "user" })
    .then((items) => res.status(200).send(items))
    .catch((err) => console.log(err));
});

// get item by id
// private route
router.get("/:id", verifyAuth, (req, res) => {
  Item.findById(req.params.id)
    .populate({ path: "seller", model: "user" })
    .then((item) => res.status(200).send(item))
    .catch((err) => console.log(err));
});

// add item
// private route
router.post("/add", verifyAuth, async (req, res) => {
  const item = new Item({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    pics: req.body.pics,
    seller: req.user.id,
  });
  try {
    const newItem = await item.save();
    res.status(200).send(newItem);
  } catch (err) {
    console.log(err);
  }
});

// edit item
// private route verify owner
router.put("/edit:id", verifyAuth, verifyItemOwner, (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((item) => res.status(200).send(item))
    .catch((err) => console.log(err));
});

// delete item
// private route verify owner
router.delete("/delete:id", verifyAuth, verifyItemOwner, (req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).send("item deleted"))
    .catch((err) => console.log(err));
});

module.exports = router;
