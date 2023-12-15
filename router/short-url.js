const { Router } = require("express");
const { postShortUrl, postRedirect } = require("../controller/short-url");

const route = Router();

route.post("", postShortUrl);
route.post("/redirect", postRedirect);

module.exports = route;
