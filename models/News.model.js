const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  header: String,
  text: String,
  cat: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
