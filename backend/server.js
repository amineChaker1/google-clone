import express from "express";
import dotenv from "dotenv";
import workoutRouter from "./routes/workouts.js";
import mongoose from "mongoose";
const app = express();
dotenv.config();
app.use(express.json());
// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/workouts", workoutRouter);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log(error);
  });
app.listen(3000, () => {
  console.log("server started at 3000");
});
