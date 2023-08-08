const express = require("express");
const PORT = 8080;
const app = express();

const data_routes = require("./routes/data");

app.get("/array", (req, res) => {
  res.send("noice");
});

//middleware or to set router
app.use("/api/data", data_routes);

app.listen(PORT, () => {
  console.log(`listning to a port ${PORT}`);
});
