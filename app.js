const express = require("express");
const app = express();
const port = 3003;

app.get("/nodeapp", (req, res) => {
  res.send("Server is running");
});

app.get("/:universalURL", (req, res) => {
  res.send("404 URL NOT FOUND-Check");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
