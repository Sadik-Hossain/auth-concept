const mongoose = require("mongoose");
const connect = async () => {
  try {
    const {
      connection: { host, port, name, readyState },
    } = await mongoose.connect("mongodb://localhost:27017/acc-11");

    console.log("DB connected " + host, port, name, readyState);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = connect;
