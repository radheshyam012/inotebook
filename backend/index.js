const express = require("express");
const connectToMongo = require("./db");

const app = express();
const port = 3000;

connectToMongo();
app.get("/", (req, res) => {
  res.send("Hello Radhe!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
