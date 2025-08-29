import jwt from "jsonwebtoken";
import { User } from "../Models/User.js";

export const isAuthenticated = async (req, res, next) => {
  const token = req.header("Auth");
  //   console.log("Token = ", token);
  if (!token) return res.json({ msg: "Please Login", success: false });
  const decoded = jwt.verify(token, process.env.SECREATE_KEY);
  console.log("Decoded = ", decoded);
  const id = decoded.userId;
  let user = await User.findById(id);
  if (!user) return res.json({ msg: "User is not found" });
  req.user = user;
  next();
};
