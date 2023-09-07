import cors from "cors";
import express, { json } from "express";
import dotenv from "dotenv";
import index from "./routes/index.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(index);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
