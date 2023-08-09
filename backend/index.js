const express = require("express");
const cors = require("cors");
const usersData = require("./data"); // Import user data from data.js

const app = express();
const PORT = 8080;

app.use(cors());

// Define an endpoint to handle paginated user data
app.get("/api/data/users", (req, res) => {
  const { page = 1, perPage = 5 } = req.query;
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const users = usersData.slice(startIndex, endIndex);

  // Calculate the total count of users
  const totalCount = usersData.length;

  res.setHeader("X-Total-Count", totalCount);

  // Equivalent of _.range(1, totalPage + 1) using native JavaScript
  const totalPage = Math.ceil(totalCount / perPage);
  const paginationRange = Array.from(
    { length: totalPage },
    (_, index) => index + 1
  );

  res.json({
    users,
    paginationRange,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
