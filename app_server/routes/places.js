const express = require("express");
const router = express.Router();

const { placePageController } = require("../controllers");

router.get("/details", placePageController.placeInfo);
router.get("/", placePageController.mainPage);
router.get("/comment", placePageController.addComment);
router.post("/comment/add", placePageController.addCommentPost);

module.exports = router;
