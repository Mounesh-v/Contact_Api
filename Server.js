import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./Routes/user.js";
import contactRouter from "./Routes/contact.js";
import { connectMongo } from "./Models/db.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//User route
app.use("/api/user", userRouter);

// Contact router
app.use("/api/contact", contactRouter);

connectMongo();

const port = process.env.PORT || 1000;
app.listen(port, () =>
  console.log(`Srever is Running on http://localhost:${port}`)
);
