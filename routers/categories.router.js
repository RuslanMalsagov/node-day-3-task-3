const { Router } = require("express");

const {
  categoryController,
} = require("../controllers/categories.controller.js");

const router = Router();

router.get("/category", categoryController.getCategory);
router.delete("/category/:id", categoryController.deleteCategoryId);
router.post("/category", categoryController.postCategory);

module.exports = router;
