const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const db = require("./config/db");

// import routes
const authRoute = require("./routes/user");
const postRoute = require("./routes/post");

// connect to db
db();

// middleware
app.use(express.json());
app.use(cors());

// route middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
