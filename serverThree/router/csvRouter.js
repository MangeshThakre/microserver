const express = require("express");
const csvRouter = express.Router();
const getCsv = require("../controller/csvController.js");

csvRouter.get("/getCsv", getCsv);

module.exports = csvRouter;
