// Register
const registerUser = (req, res) => {
  res.send("Register Route");
};
// Login
const loginUser = (req, res) => {
  res.send("Login Route");
};

module.exports = {
  registerUser,
  loginUser,
};
