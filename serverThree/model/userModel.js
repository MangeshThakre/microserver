const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: [true, "user name is required"] },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true
    },
    gender: { type: String, required: [true, "gender is required"] },
    status: {
      type: String,
      required: [true, "status is required"]
    }
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
