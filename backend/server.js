const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/db");
const fileUpload = require("express-fileupload");

const passport = require("passport");

// import routes
const authRoute = require("./routes/user");
const postRoute = require("./routes/post");
const eventRoute = require("./routes/event");
const itemRoute = require("./routes/item");

// connect to db
db();

// middlewares
app.use(express.json());
app.use(cors());

// facebook
app.use(passport.initialize());
require("./passport/passport")(passport);

// route middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/events", eventRoute);
app.use("/api/shop", itemRoute);

// upload photo
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;
  console.log(req);

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
