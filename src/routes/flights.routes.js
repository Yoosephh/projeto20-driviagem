import { Router } from "express";
import { flightSchema, querySchemaFlights, travelSchema } from "../schemas/flight.schema.js";
import { validateQuerySchema, validateSchema } from "../middlewares/validateSchema.js";
import { getFlights, newFlight, newTravel } from "../controllers/flight.controllers.js";

const flights = Router()

flights.post("/flights", validateSchema(flightSchema), newFlight)
flights.get("/flights", validateQuerySchema(querySchemaFlights), getFlights)
flights.post("/travels", validateSchema(travelSchema), newTravel)

export default flights