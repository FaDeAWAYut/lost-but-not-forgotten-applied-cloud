const express = require("express");
const axios = require("axios");

const app = express();

app.get("/items", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:4000/api/items");
    res.json(response.data); // or render a view with this data
  } catch (err) {
    res.status(500).json({ error: "Could not reach LostService" });
  }
});

app.listen(3000, () => console.log("LostApp running on port 3000"));
