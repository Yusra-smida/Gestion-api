const mongoose = require("mongoose");

const DBconnect = async () => {
  try {
    await mongoose.connect(process.env.Db_Local);

    console.log("Data base is connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = DBconnect;