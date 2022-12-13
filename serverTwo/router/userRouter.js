const express = require("express");
const userRouter = express.Router();

const { getUsers, updateUser } = require("../controller/userController.js");

userRouter.get("/users", getUsers);
userRouter.put("/user/:userId", updateUser);

module.exports = userRouter;
