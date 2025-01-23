import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://mphomutloanemm:Kelebogile2020!@cluster0.w5gns.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB Connected"));
};
