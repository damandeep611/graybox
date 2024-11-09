const express = require("express");
const app = express();

// define a route
app.get("/", (req, res) => {
  res.send("the express server is live now");
});

// starting the server
const port = 3000;
app.listen(port, () => {
  console.log(`Sever is running on http://localhost:${port}`);
});
