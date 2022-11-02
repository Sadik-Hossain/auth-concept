const express = require("express");
const { signup, login, getMe } = require("../controllers/user.controller");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();
router.route("/signup").post(signup);

router.route("/login").post(login);
//* for recognizing user (user persistency)
router.route("/me").get(verifyToken, getMe);
// router.get("/me", verifyToken, getMe);

module.exports = router;
