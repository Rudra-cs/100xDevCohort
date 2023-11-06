import express from "express";
import mongoose from "mongoose";
const app = express();

const port = 3000;
import authRoutes from "./routes/auth";
import todoRoutes from "./routes/todo";
import cors from "cors";

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

mongoose.connect(
  "mongodb+srv://rudrabehera50:rudra_123@cluster0.srqolxd.mongodb.net/?retryWrites=true&w=majority"
);

const db = mongoose.connection;
db.once("open", (_) => {
  console.log("Database connected:");
});

db.on("error", (err) => {
  console.error("connection error:", err);
});
