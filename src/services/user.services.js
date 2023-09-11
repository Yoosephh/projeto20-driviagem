import { userRepositories } from "../repositories/user.repositories.js";

export async function userRegistration(firstName, lastName){
  await userRepositories.registerUser(firstName, lastName)
}
export async function cityRegistration(name) {
  await userRepositories.joinCity(name)
}
export async function sendUserFlights(name){
  const flights = await userRepositories.getUsersFlights(name)
  if(flights.rowCount > 10) return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: "Too many results"})
  return flights
  
}

