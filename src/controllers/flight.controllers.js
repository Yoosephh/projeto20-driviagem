import httpStatus from "http-status"
import { flightRegistration } from "../services/flights.services.js"

export async function newFlight(req,res) {
  const {origin, destination, date} = req.body;

  await flightRegistration(origin, destination, date)
}