const { homePage } = require("../controllers/mainPage");
const { mainPage } = require("../controllers/adminPage");

const mainPageController = {
  homePage,
};

const adminPageController = {
  mainPage,
};

module.exports = { mainPageController, adminPageController };
