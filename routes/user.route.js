const express = require("express");
const { signup, login, getMe } = require("../controllers/user.controller");
const verifyAdmin = require("../middlewares/verifyAdmin");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

//* if we want to make all route below private, simply use middleware
//* this will check token first, before hitting any other routes
// router.use(verifyToken);

router.route("/signup").post(signup);
router.route("/login").post(login);
//* for recognizing user (user persistency)
router.route("/me").get(verifyToken, getMe);
// router.get("/me", verifyToken, getMe);

//* private route only for logged in user
router.route("/secret").get(verifyToken, async (req, res) => {
  res.send("welcome to secret!");
});

//* private routes only for admin and manager users
router
  .route("/admin")
  .get(verifyToken, verifyAdmin("admin", "manager"), async (req, res) => {
    res.send("welcome to admin panel!");
  });
//* private routes only for admin  users
router
  .route("/super")
  .get(verifyToken, verifyAdmin("admin"), async (req, res) => {
    res.send("welcome to admin panel!");
  });

module.exports = router;
