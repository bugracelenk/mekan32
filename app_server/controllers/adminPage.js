const adminPage = (req, res, next) => {
  res.render("index", {
    appTitle: "Mekan32",
    appDesc: "Isparta civarındaki mekanları keşfedin",
    title: "Admin Page",
    footer: {
      text: "&copy; Altuğ Buğra Çelenk 2020",
    },
  });
};

module.exports = {
  adminPage,
};
