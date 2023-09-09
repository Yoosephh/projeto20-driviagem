import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import index from "./routes/index.routes.js";
import { errors } from "./middlewares/errors.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(index);
app.use(errors);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
