const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi docker, look, no hands");
});
app.listen(3333);
