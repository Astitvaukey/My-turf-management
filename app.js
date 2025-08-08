const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("Welcome to the Turf Journal App");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});