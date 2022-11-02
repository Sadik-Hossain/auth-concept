const UserModel = require("../models/User.model");
const { signupService, findUserbyEmail } = require("../services/user.service");
const { generateToken } = require("../utils/token");

const signup = async (req, res) => {
  try {
    const user = await signupService(req.body);
    console.log(user);
    res.status(200).json({ user });
  } catch (error) {
    console.log("from controller:", error.message);
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};
/**
 * 1. check if email and password are given
 * 2. load user with email
 * 3. if not user send res to signup
 * 4. compare password
 * 5. if password not correct send res
 * 6. check status active / inactive / blocked
 * 7. if not active send res
 * 8. generate token
 * 9. send user and token
 * 

 */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        status: "fail",
        error: "Please provide credential",
      });
    }

    const user = await findUserbyEmail(email);

    if (!user) {
      return res.status(401).json({
        status: "fail",
        error: "No user found, Please create an account",
      });
    }

    // const isPasswordValid = bcrypt.compareSync(password, user.password);
    const isPasswordValid = user.comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(403).json({
        status: "fail",
        error: "password is not correct",
      });
    }
    if (user.status !== "active") {
      return res.status(401).json({
        status: "fail",
        error: "your account isn't activate yet!",
      });
    }

    const token = generateToken(user);
    // * only, ...others sends extra mongoose info, to prevent this we used .toObject()
    const { password: pwd, ...others } = user.toObject();
    res.status(200).json({
      status: "success",
      message: "successfully logged in",
      data: {
        user: others,
        token,
      },
    });
  } catch (error) {
    console.log(error.message);
    res.status(505).json({
      status: "fail",
      error: error.message,
    });
  }
};
const getMe = async (req, res) => {
  try {
    console.log("from getme: ", req.user);
    const user = await findUserbyEmail(req.user?.email);
    // res.json(req.user);
    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    console.log(error.message);
    res.status(505).json({
      status: "fail",
      error: error.message,
    });
  }
};

module.exports = { signup, login, getMe };
