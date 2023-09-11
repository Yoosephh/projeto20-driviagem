import httpStatus from "http-status"

import { flightRegistration, sendFlights, travelRegistration } from "../services/flights.services.js"

export async function newFlight(req,res) {
  const {origin, destination, date} = req.body;

  await flightRegistration(origin, destination, date)
  return res.sendStatus(httpStatus.CREATED)
}

export async function newTravel(req,res) {
  const {passengerId, flightId} = req.body;

  await travelRegistration(passengerId, flightId)
  return res.sendStatus(httpStatus.CREATED)
}

export async function getFlights(req, res){
  const origin = req.query.origin ? Number(req.query.origin) : undefined
  const destination = req.query.destination ? Number(req.query.destination) : undefined
  const biggerDate = req.query['bigger-date']  
  const smallerDate = req.query['smaller-date'] 

  const flights = await sendFlights(origin, destination, biggerDate, smallerDate)
  console.log(flights)
  return res.status(httpStatus.OK).send(flights)
}