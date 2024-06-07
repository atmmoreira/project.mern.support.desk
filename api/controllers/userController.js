const asyncHandler = require("express-async-handler");
const bcript = require("bcryptjs");

// Modules
const User = require("../models/userModels");

/** *
 * @description Register a new user
 * @route       /api/users
 * @access      Public
 */
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  // Find is User already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists.");
  }

  // Hash Password
  const salt = await bcript.genSalt(10);
  const hashedPassword = await bcript.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data.");
  } 
});

/** *
 * @description Login a user
 * @route       /api/users/login
 * @access      Public
 */
const loginUser = asyncHandler(async (req, res) => {
  res.send("Login Route");
});

module.exports = {
  registerUser,
  loginUser,
};
