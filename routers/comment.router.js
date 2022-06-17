const { Router } = require("express");
const { commentController } = require("../controllers/comment.controller");

const router = Router();

router.post("/comment", commentController.postComment);
router.get("/comment/news/:id", commentController.getComment);
router.delete("/comment/:id", commentController.deleteComment);

module.exports = router;
