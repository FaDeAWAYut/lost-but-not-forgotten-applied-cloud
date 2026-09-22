const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();

// Serve static files (including our HTML) from the public folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/items", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:4000/api/items");
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Could not reach LostService" });
  }
});

app.listen(3000, () => console.log("LostApp running on port 3000"));
