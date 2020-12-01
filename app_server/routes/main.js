const express = require("express");
const router = express.Router();

const { placePageController, otherControllers } = require("../controllers");

router.get("/", placePageController.mainPage);
router.get("/about", otherControllers.about);

module.exports = router;
