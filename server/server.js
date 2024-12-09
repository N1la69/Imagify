import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
await connectDB();

app.get("/", (req, res) => res.send("API Working"));
app.use("/api/user", userRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
