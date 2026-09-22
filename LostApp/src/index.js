const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const backendHost = process.env.BACKEND_HOST || "localhost";
const backendUrl = `http://${backendHost}:4000/api/items`;

app.get("/items", async (req, res) => {
  try {
    const response = await axios.get(backendUrl);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Could not reach LostService" });
  }
});

app.post("/items", async (req, res) => {
  try {
    const response = await axios.post(backendUrl, req.body);
    res.status(201).json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Could not reach LostService" });
  }
});

app.listen(3000, () => console.log("LostApp running on port 3000"));
