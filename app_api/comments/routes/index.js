const router = require("express").Router();

const CommentControllers = require("../controllers");
const auth = require("../../middleware/auth");
const admin = require("../../middleware/admin");

router.get("/", CommentControllers.getComments);
router.post("/", CommentControllers.createComment);
router.patch("/", CommentControllers.updateComment);
router.delete("/", CommentControllers.removeComment);

module.exports = router;
