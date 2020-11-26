const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/db");

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

const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
