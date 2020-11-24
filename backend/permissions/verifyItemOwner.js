const Item = require("../models/Item");

module.exports = (req, res, next) => {
  Item.findById(req.params.id).then((item, err) => {
    if (err) return res.send("this item doesnt exist");
    if (item.seller.toString() !== req.user.id) {
      res.status(401).send("you dont have access");
    } else {
      next();
    }
  });
};
