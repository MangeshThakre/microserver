const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const csvRouter = require("./router/csvRouter.js");
const path = require("path");

app.use(
  "../public/static",
  express.static(path.join(__dirname, "../public/static"))
);

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// routes

app.use("/api", csvRouter);

module.exports = app;
