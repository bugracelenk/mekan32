const homePage = (req, res, next) => {
  res.render("index", { title: "Altuğ Buğra Çelenk", studentNumber: "1621012095" });
};

module.exports = {
  homePage,
};
