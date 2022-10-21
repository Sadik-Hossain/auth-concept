const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
  res.send(`hello, from auth server`);
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
