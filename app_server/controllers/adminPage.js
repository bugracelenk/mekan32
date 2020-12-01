const adminPage = (req, res, next) => {
  res.render("index", { appTitle: "Mekan32", appDesc: "Isparta civarındaki mekanları keşfedin", title: "Admin Page" });
};

module.exports = {
  adminPage,
};
