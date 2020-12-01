const express = require("express");
const router = express.Router();

const { adminPageController } = require("../controllers");

router.get("/", adminPageController.adminPage);

module.exports = router;
