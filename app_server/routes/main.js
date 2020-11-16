const express = require("express");
const router = express.Router();

const { mainPageController } = require("../controllers");

router.get("/", mainPageController.homePage);

module.exports = router;
