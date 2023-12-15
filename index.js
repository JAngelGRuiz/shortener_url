const express = require("express");
const { shortUrlRoutes } = require("./router");
const bodyParser = require("body-parser");
const connectDb = require("./config/db");
const app = express();

const base_url_version = "/v1";

app.use(bodyParser.json());
app.use(`${base_url_version}/short/url`, shortUrlRoutes);

connectDb().then(() => {
  app.listen("8080", () => {
    console.log("connected");
  });
});
