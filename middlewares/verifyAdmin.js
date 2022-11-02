//* middleware stucture
// const middleware = (req, res, next) => {
//   next();
// };

//* verifyAdmin is a fn that takes roles arg, and returns a middleware

module.exports = (...role) => {
  return (req, res, next) => {
    //* we will get userRole from verifyToken middleware's db.find({email:decoded.user})
    const userRole = req.user.role;
    if (!role.includes(userRole)) {
      return res.status(403).json({
        status: "failed",
        error: "you are not authorized",
      });
    }
    next();
  };
};
