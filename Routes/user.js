import express from "express";
import { login, register } from "../Controllers/user.js";
import { getContactByUserId } from "../Controllers/contact.js";

const router = express.Router();

//User register
// @api dsc:-user Register
// @api method:- post
// @api endpoint:- /api/user/register
router.post("/register", register);
//User Login
// @api dsc:-user Login
// @api method:- post
// @api endpoint:- /api/user/login
router.post("/login", login);



export default router;
