const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  headline: { type: String, required: true },
  byline: String,
  pub_date: Date,
  web_url: String
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;