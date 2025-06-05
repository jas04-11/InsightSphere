var mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  desc: String,
  image: String,
  content: String,
  date: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
  
});

const blogModel = mongoose.model("blog", blogSchema);

module.exports = blogModel;
