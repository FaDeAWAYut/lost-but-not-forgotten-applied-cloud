const express = require("express");
const router = express.Router();
const Item = require("../model/Item");

// get all items
router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// get item by id
router.get("/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json(item);
});

module.exports = router;
