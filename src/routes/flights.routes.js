import { Router } from "express";
import { flightSchema } from "../schemas/flight.schema.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { newFlight } from "../controllers/flight.controllers.js";

const flights = Router()

flights.post("/flights", validateSchema(flightSchema), newFlight)
flights.get("/flights",)
flights.post("/travels",)

export default flights