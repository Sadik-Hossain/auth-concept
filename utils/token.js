const jwt = require("jsonwebtoken");
const generateToken = (userInfo) => {
  const payload = {
    email: userInfo.email,
    role: userInfo.role,
  };
  //* crypto.randomBytes(64).toString("hex")
  const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: "20",
  });
  return token;
};

module.exports = { generateToken };
