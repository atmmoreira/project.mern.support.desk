const express = require("express");
const dotenv = require("dotenv").config();

// Variables
const PORT = process.env.PORT || 5000;

// Instanciate Express
const app = express();

// Routes
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Support Desk API",
  });
});

// Users Routes
app.use("/api/users", require('./routes/userRoutes'));

// Listen the Server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
