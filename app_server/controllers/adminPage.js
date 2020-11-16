const mainPage = (req, res, next) => {
  res.render("index", { title: "Admin Page" });
};

module.exports = {
  mainPage,
};
