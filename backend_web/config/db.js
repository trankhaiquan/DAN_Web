import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://keepdoingit123:01683884872b@cluster0.nip9m.mongodb.net/doannganh"
    )
    .then(() => console.log("DB connected"));
};
