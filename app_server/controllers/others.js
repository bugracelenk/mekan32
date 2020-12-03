const fixed = require("./fixed");

const about = (req, res, next) => {
  res.render("about-us", {
    title: "Hakkında",
    ...fixed,
    about: "Mekan32, Isparta ilindeki mekanlar hakkında bilgi edinmenizi, yorum yapmanızı ve mekanları listemelenizi sağlayan bir web uygulamasıdır.",
  });
};

module.exports = {
  about,
};
