const mongoose = require("mongoose");

async function connectDb() {
  return new Promise((res, rej) => {
    mongoose
      .connect(
        `mongodb+srv://angelgr746:F55bHaMBUAxkZaar@cluster0.cxky6sv.mongodb.net/dev`
      )
      .then(() => res())
      .catch((err) => {
        throw new Error("Connection to db failed!");
      });
  });
}

module.exports = connectDb;
