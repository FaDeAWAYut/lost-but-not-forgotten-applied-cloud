const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
});
// schema from mongodb

module.exports = mongoose.model("Item", itemSchema);
