const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogsSchema = new Schema({
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: String,
    trim: true,
    required: "Author name is required",
  },
  blogtext: {
    type: String,
    trim: true,
    required: "blogtext is required",
  },
  gameID: {
    type: Number,
    required: "Game id is required",
  },
});

const Blogs = mongoose.model("Blogs", blogsSchema);

module.exports = Blogs;
