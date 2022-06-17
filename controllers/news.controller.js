const News = require("../models/News.model");

module.exports.newsController = {
  getNews: (req, res) => {
    News.find({}, (err, news) => {
      if (!err) {
        res.json(news);
      }
    }).populate("cat");
  },

  getNewsCats: (req, res) => {
    News.find({ cat: req.params.id }).then((news) => {
      res.json(news);
    });
  },

  getNewsId: (req, res) => {
    News.findById(req.params.id).then((docs) => {
      res.json(docs);
    });
  },

  deleteNewsId: (req, res) => {
    News.findByIdAndRemove(req.params.id).then((docs) => {
      res.json(`Новость удалена!`);
    });
  },

  postNews: (req, res) => {
    const { header, text, cat } = req.body;
    News.create({
      header,
      text,
      cat,
    }).then(() => {
      res.json("Новость добавлена!");
    });
  },

  patchNewsId: (req, res) => {
    const { header, text } = req.body;
    News.findByIdAndUpdate(req.params.id, {
      header,
      text,
    }).then((docs) => {
      res.json(docs);
    });
  },
};
