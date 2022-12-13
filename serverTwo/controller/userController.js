const userModel = require("../model/userModel.js");

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    return res.status(200).json({ success: true, data: users });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { name, email, status, gender } = req.body;
  if (!name || !email || !status || !gender) {
    return res.status(500).json({
      success: false,
      message: "name, email, status and gender is Required"
    });
  }
  try {
    const result = await userModel.findByIdAndUpdate(userId, req.body, {
      new: true
    });
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    // if email id is same
    if (error.code == 11000) {
      return res.status(400).json({
        success: false,
        message: `${Object.keys(err.keyValue)} should be unique`
      });
    }
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

module.exports = { getUsers, updateUser };
