const { Schema, model } = require("mongoose");

const UrlViews = new Schema({
  url_name: String,
  count: Number,
});

exports.UrlViews = model("url", UrlViews);
