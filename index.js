const express = require("express");
const cors = require("cors");
const validator = require("validator");
const userModel = require("./models/User.model");
const connect = require("./db/connect");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
  res.send(`hello, from auth server`);
});
app.post("/", async (req, res) => {
  const newUser = new userModel(req.body);

  res.send(`hello, from auth server`);
});

// console.log(validator.isEmail("poasdasda@a.ca"));

// mongoose.connection.on("disconnected", () => {
//   console.log("mongodb disconnected");
// });
// const a = mongoose.connection.on("connected", () => {
//   console.log("mongodb connected");
// });

app.listen(PORT, () => {
  connect();
  console.log(`Server started on ${PORT}`);
});
