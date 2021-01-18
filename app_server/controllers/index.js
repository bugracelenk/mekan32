const { adminPage } = require("./adminPage");
const { about } = require("./others");
const { addComment, placeInfo, mainPage, addCommentPost } = require("./placeControllers");

const adminPageController = {
  adminPage,
};

const placePageController = {
  addComment,
  placeInfo,
  mainPage,
  addCommentPost,
};

const otherControllers = {
  about,
};

module.exports = { adminPageController, placePageController, otherControllers };
