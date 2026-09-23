const express = require("express");
const router = express.Router();
const Item = require("../model/Item");

router.get("/", async (req, res) => {
  const { search } = req.query;

  let filter = {};
  if (search) {
    filter.itemName = { $regex: search, $options: "i" };
  }

  const items = await Item.find(filter);
  console.log("Amount Retrieved:", items.length);
  res.json(items);
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
