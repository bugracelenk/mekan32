const { adminPage } = require("./adminPage");
const { about } = require("./others");
const { addComment, placeInfo, mainPage } = require("./placeControllers");

const adminPageController = {
  adminPage,
};

const placePageController = {
  addComment,
  placeInfo,
  mainPage,
};

const otherControllers = {
  about,
};

module.exports = { adminPageController, placePageController, otherControllers };
