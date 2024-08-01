const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

const TodoSchema = {
  title: String,
  description: String,
  completed: Boolean,
};

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = {
  Todo,
};