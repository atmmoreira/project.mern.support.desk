const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();

// Variables
const PORT = process.env.PORT || 5000;

// Instanciate Express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Support Desk API",
  });
});

// Users Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

// Listen the Server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
