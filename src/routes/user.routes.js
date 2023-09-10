import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { citySchema, nameSchema } from "../schemas/user.schemas.js";
import { getUserFlights, newCity, newPassenger } from "../controllers/user.controllers.js";

const user = Router()
user.post("/passengers", validateSchema(nameSchema), newPassenger)

user.post("/cities", validateSchema(citySchema), newCity)

user.get("/passengers/travels", getUserFlights)

export default user
