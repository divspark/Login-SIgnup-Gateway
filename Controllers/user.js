import jwt from "jsonwebtoken";
import { User } from "../model/UserSchema.js";

const secretKey = process.env.SECRET_KEY;

export const HandleUserLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  // Authenticate token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    // Token is valid, user is authenticated
    res.redirect("/home");
  });
  console.log("user authentication successfull");
};

export const HandleUserSignup = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }
  const newUser = new User({ email, password });
  await newUser.save();
  //console.log("new user added");
  const token = jwt.sign({ email }, secretKey);
  res.cookie("token", token, { httpOnly: true });
  res.redirect("/login");
};
