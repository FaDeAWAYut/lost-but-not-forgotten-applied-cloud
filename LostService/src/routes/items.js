const express = require("express");
const router = express.Router();
const Item = require("../model/Item");

router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

router.get("/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json(item);
});

router.post("/", async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    console.log("Saved item:", savedItem);
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ error: "Could not save item" });
  }
});

module.exports = router;
