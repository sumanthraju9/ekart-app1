const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  let exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: "User exists" });
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed });
  res.json({ message: "Signup successful", user });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid" });
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Invalid" });
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );
  res.json({ message: "Login successful", token, user });
};

exports.logout = async (req, res) => {
  res.json({ message: "Logged out" });
};

exports.me = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json({ user });
};
