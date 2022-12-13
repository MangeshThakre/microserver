const { json } = require("body-parser");
const { Parser } = require("json2csv");
const userModel = require("../model/userModel.js");
const path = require("path");
const moment = require("moment");
const fs = require("fs");

const getCsv = async (req, res) => {
  const fields = ["_id", "name", "email", "gender", "status", "createdAt"];
  const json2Csv = new Parser({ fields });
  try {
    const user = await userModel.find({}, { __v: 0 });
    const csv = json2Csv.parse(user);
    res.status(200).attachment("user.csv").send(csv);
    return;
  } catch (error) {
    // if id is invalid
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid Id"
      });
    }
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = getCsv;
