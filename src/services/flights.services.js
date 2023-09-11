import { flightRepositories } from "../repositories/flight.repositositories.js";
import { userErrors } from "../error/user.errors.js";
import httpStatus from "http-status";

export async function flightRegistration(origin, destination, date) {
  if(typeof date === "number") throw userErrors.dateFormat()

  if(origin === destination) throw userErrors.originDestination()

  const splitDate = date.split("-");
  const day = parseInt(splitDate[0], 10);
  const month = parseInt(splitDate[1] - 1, 10);
  const year = parseInt(splitDate[2], 10);
  const deployDate = [splitDate[1], splitDate[0], splitDate[2]]
  deployDate.join("-")
  const dateAdjusted = new Date(year, month, day);
  const dateTimestamp = dateAdjusted.getTime();
  const nowTimetamp = Date.now();
  const timeDifference = dateTimestamp - nowTimetamp
  if(timeDifference <= 0) throw userErrors.dateError()

  await flightRepositories.registerFlight(origin, destination, deployDate)
}

export async function travelRegistration(passengerId, flightId) {
  await flightRepositories.registerTravel(passengerId, flightId)
}

export async function sendFlights(origin, destination, biggerDate, smallerDate){
    if(origin){
      if(typeof origin !== "number" || !Number.isInteger(origin) || origin < 1) throw userErrors.queryNumberType("origin")
    }
    if(destination){
      if(typeof destination !== "number" || !Number.isInteger(destination)|| destination < 1) throw userErrors.queryNumberType("destination")
    }
    if(smallerDate && !biggerDate) throw userErrors.querySingleDate("smaller-date", "bigger-date")
    
    if(!smallerDate && biggerDate) throw userErrors.querySingleDate("bigger-date", "smaller-date")
    if(smallerDate && biggerDate){
      const splitBiggerDate = biggerDate.split("-")
      const splitSmallerDate = smallerDate.split("-")

      if(Number(splitSmallerDate[0]) > Number(splitBiggerDate[0]) && Number(splitSmallerDate[1])>=Number(splitBiggerDate[1]) && Number(splitSmallerDate[2])>=Number(splitBiggerDate[2]) )throw userErrors.queryDateValues()

      if(Number(splitSmallerDate[1]) > Number(splitBiggerDate[1]) && Number(splitSmallerDate[2])>=Number(splitBiggerDate[2])) throw userErrors.queryDateValues()

      if(Number(splitSmallerDate[2]) > Number(splitBiggerDate[2])) throw userErrors.queryDateValues()

      const splitBigger = biggerDate.split("-")
      const splitSmaller = smallerDate.split("-")
      const deployBigger = [splitBigger[1], splitBigger[0], splitBigger[2]].join("-")
      const deploySmaller = [splitSmaller[1], splitSmaller[0], splitSmaller[2]].join("-")
      const flights = await flightRepositories.getFlights(origin, destination, deployBigger, deploySmaller)
      // if(flights.rowCount === 0 ) return []
      if(flights.rowCount > 10) return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: "Too many results"})
      flights.rows.forEach(item => {
        item.date = item.date.toISOString().slice(0, 10).split("-").reverse().join("-")
      })
      return flights.rows
    }
}