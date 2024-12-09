import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("API Working"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));