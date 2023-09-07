import { Router } from "express";
import user from "./user.routes.js";
import flights from "./flights.routes.js";

const index = Router()
index.use(user)
index.use(flights)
export default index