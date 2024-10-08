const express = require("express");
const router = express.Router();

// Controllers
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

// Protect Middleware
const { protect } = require("../middleware/authMiddleware");

// Routes
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
