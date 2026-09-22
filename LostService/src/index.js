const express = require("express");
const cors = require("cors");
const itemsRouter = require("./routes/items");

var mongoose = require("mongoose");
var dbServer = "127.0.0.1:27017";
const dbPort = "27017";
const dbName = "mongoDB";

const app = express();
app.use(cors()); // lets LostApp make requests to this server from a different origin/port
app.use(express.json());

if (!process.env.TEXTSTORE_HOST) {
  console.log("WARNING: the environment variable TEXTSTORE_HOST is not set");
} else {
  dbServer = process.env.TEXTSTORE_HOST + ":" + dbPort;
}

mongoose
  .connect(`mongodb://${dbServer}/${dbName}`)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("Database connection error", dbName);
    console.error(" trying to connect to server:", connection);
  });

app.use("/api/items", itemsRouter); // mounts the router at this path

app.listen(4000, () => console.log("LostService running on port 4000"));
