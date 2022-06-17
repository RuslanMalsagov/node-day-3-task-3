const Comment = require("../models/Comment.model.js");

module.exports.commentController = {
  getComment: (req, res) => {
    Comment.find({ news: req.params.id }, (err, news) => {
      if (!err) {
        res.json(news);
      }
    });
  },
  deleteComment: (req, res) => {
    Comment.findByIdAndRemove(req.params.id).then(() => {
      res.json("Комментарий удален.");
    });
  },
  postComment: (req, res) => {
    const { name, text, news } = req.body;
    Comment.create({
      name,
      text,
      news,
    }).then(() => {
      res.json("Комментарий добавлен.");
    });
  },
};
