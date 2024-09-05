const path = require("path");
const express = require("express");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const colors = require("colors");
const dotenv = require("dotenv").config();

// Connect Database
connectDB();

// Variables
const PORT = process.env.PORT || 5000;

// Instanciate Express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Users Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tickets", require("./routes/ticketRoutes"));

// Server Frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(__dirname, "../", "frontend", "build", "index.html")
  );
} else {
  // Routes
  app.get("/", (req, res) => {
    res.status(200).json({
      message: "Welcome to Support Desk API",
    });
  });
}

app.use(errorHandler);

// Listen the Server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`.bgWhite);
});
