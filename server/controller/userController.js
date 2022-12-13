const userModel = require("../model/userModel.js");

const createUser = async (req, res) => {
  const { id, name, email, gender, status } = req.body;

  const userInfo = new userModel({
    name,
    email,
    gender,
    status
  });

  try {
    const user = await userInfo.save();
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    if (error.code == 11000) {
      return res.status(400).json({
        success: false,
        message: `${Object.keys(error.keyValue)} should be unique`
      });
    }
    if (error.name == "ValidationError") {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
    return res
      .status(500)
      .json({ success: false, message: "INTERNET SERVER ERROR" });
  }
};

module.exports = createUser;
