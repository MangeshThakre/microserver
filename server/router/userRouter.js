const express = require("express");
const userRouter = express.Router();

const constcreateUser = require("../controller/userController.js");

userRouter.post("/user", constcreateUser);

module.exports = userRouter;
