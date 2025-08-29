import bcrypt from "bcryptjs";
import { User } from "../Models/user.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (name == "" || email == "" || password == "") {
    return res.json({ msg: "All Fields are Required" });
  }
  let user = await User.findOne({ email });
  if (user) {
    return res.json({ msg: "User is Alerady Exist", success: false });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  user = await User.create({ name, email, password: hashPassword });
  return res.json({
    msg: "User Created Successfully....",
    success: true,
    user,
  });
};

export const login = async (req, res) => {
  console.log("Body Response = ", req.body);
  const { email, password } = req.body;
  if (email == "" || password == "") {
    return res.json({ msg: "All Fields are Required" });
  }
  const user = await User.findOne({ email });
  if (!user) return res.json({ msg: "User is Not Exist", success: false });

  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) return res.json({ msg: "Invalid Password", success: false });
  const token = jwt.sign({ userId: user._id }, process.env.SECREATE_KEY, {
    expiresIn: "7d",
  });
  res.json({ msg: `Welcome ${user.name}`, token, success: true });
};
