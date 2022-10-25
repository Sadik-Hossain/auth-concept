const UserModel = require("../models/User.model");

const signupService = async (userInfo) => {
  try {
    const user = await UserModel.create(userInfo);
    return user;
  } catch (error) {
    console.log("from service: ", error.message);
    throw error;
  }
};
const findUserbyEmail = async (email) => {
  try {
    return await UserModel.findOne({ email });
  } catch (error) {
    console.log("from service: ", error.message);
    throw error;
  }
};

module.exports = { signupService, findUserbyEmail };
