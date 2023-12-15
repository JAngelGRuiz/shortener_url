const { createHmac, hmca } = require("node:crypto");
const { UrlViews } = require("../models/short-url");
const shortUrlFunc = (url) => url.slice(0, 2);

exports.postShortUrl = async (req, res, next) => {
  const { url } = req.body;

  try {
    const arrUrl = url.split("//");
    const shortUrl = `${arrUrl[0]}//${shortUrlFunc(arrUrl[1])}`;

    res.status(200).send({
      shortenedUrl: `${shortUrl}`,
      originalUrl: url,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.postRedirect = async (req, res, next) => {
  const { originalUrl } = req.body;

  try {
    const findedUrl = await UrlViews.findOneAndUpdate({
      url_name: originalUrl,
    });

    if (findedUrl) {
      findedUrl.count = findedUrl.count + 1;
      findedUrl.save();
    } else {
      await new UrlViews({
        url_name: originalUrl,
        count: 1,
      }).save();
    }

    res.redirect(originalUrl);
  } catch (error) {
    console.log(error);
  }
};
