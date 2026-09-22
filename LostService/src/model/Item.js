const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  itemName: String,
  description: String,
  locationFound: String,
  contactInfo: String,
});

module.exports = mongoose.model("Item", itemSchema);
