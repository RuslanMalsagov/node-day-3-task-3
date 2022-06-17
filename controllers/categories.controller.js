const Category = require("../models/Category.model.js");

module.exports.categoryController = {
  getCategory: (req, res) => {
    Category.find({}).then((docs) => {
      res.json(docs);
    });
  },
  deleteCategoryId: (req, res) => {
    Category.findByIdAndRemove(req.params.id).then((docs) => {
      res.json("Категория удалена!");
    });
  },
  postCategory: (req, res) => {
    const { name } = req.body;
    Category.create({
      name,
    }).then(() => {
      res.json("Категория добавлена!");
    });
  },
};
