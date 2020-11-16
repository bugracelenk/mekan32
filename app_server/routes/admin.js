const express = require("express");
const router = express.Router();

const { adminPageController } = require("../controllers");

router.get("/", adminPageController.mainPage);

module.exports = router;
