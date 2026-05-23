const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Redirect all routes
app.all("*", (req, res) => {
  const target = `https://tantalum.up.railway.app${req.originalUrl}`;
  res.redirect(302, target);
});

app.listen(PORT, () => {
  console.log(`Redirect server running on port ${PORT}`);
});
