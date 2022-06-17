const { Router } = require("express");

const { newsController } = require("../controllers/news.controller.js");

const router = Router();

router.get("/news", newsController.getNews);
router.get("/news/:id", newsController.getNewsId);
router.get("/news/category/:id", newsController.getNewsCats);
router.delete("/news/:id", newsController.deleteNewsId);
router.post("/news", newsController.postNews);
router.patch("/news", newsController.patchNewsId);

module.exports = router;
