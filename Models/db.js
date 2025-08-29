import mongoose from "mongoose";

export const connectMongo = async () => {
  try {
    await mongoose.connect(
      process.env.MONGOO_URI,
      { dbName: "ContactUser" }
    );
    console.log("Mongodb Connected.....!");
  } catch (error) {
    console.log("Db error",error)
  }
};
