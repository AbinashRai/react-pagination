const express = require("express");
const PORT = 8080;
const app = express();

app.get("/array", (req, res) => {
  res.send("array");
});
app.listen(PORT, () => {
  console.log(`listning to a port ${PORT}`);
});
