const jwt = require("jsonwebtoken");
const util = require("util");
const UserModel = require("../models/User.model");
/**
 * 1. check if token exists
 * 2. if not token send res
 * 3. decode the token
 * 4. if valid next
 * 5. if invalid send res
 */

module.exports = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")?.[1];

    if (!token) {
      return res.status(401).json({
        status: "fail",
        error: "You aren't logged in",
      });
    }
    //* jwt.verify don't return a promise, thus await get's highlighted in vscode, it returns a callback. to fix this issue we use node's builtin util module, promisify

    const decoded = await util.promisify(jwt.verify)(
      token,
      process.env.TOKEN_SECRET
    );
    console.log("from verifytoken: ", decoded);

    //*1. we can send the decoded value to the next middleware
    req.user = decoded;
    //*2. or, we can also send user from db to the next middleware
    // const user = UserModel.findOne({ email: decoded.email });
    // req.user = user;
    next();
  } catch (error) {
    res.status(403).json({
      status: "fail",
      error: "invalid token",
    });
  }
};
