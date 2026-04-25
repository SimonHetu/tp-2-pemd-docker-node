const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello de Node.js Docker TP2!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
