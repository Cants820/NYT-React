const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  headLine:
  {
    type:String, required: true
  },
  url:
  {
    type:String, required: true, unique: true
  },
  publishedDate:{
    type:Date, required: true, default:Date.now
  },
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;