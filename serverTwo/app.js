const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouoter = require("./router/userRouter.js");

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// routes

app.use("/api", userRouoter);

module.exports = app;
