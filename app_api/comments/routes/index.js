const router = require("express").Router();

const CommentControllers = require("../controllers");
const auth = require("../../middleware/auth");
const admin = require("../../middleware/admin");

router.get("/", CommentControllers.getComments);
router.post("/", auth, CommentControllers.createComment);
router.patch("/", auth, admin, CommentControllers.updateComment);
router.delete("/", auth, admin, CommentControllers.removeComment);

module.exports = router;
