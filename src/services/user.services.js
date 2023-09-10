import { userRepositories } from "../repositories/user.repositories.js";

export async function userRegistration(firstName, lastName){
  await userRepositories.registerUser(firstName, lastName)
}
export async function cityRegistration(name) {
  await userRepositories.joinCity(name)
}
export async function sendUserFlights(name){
  return await userRepositories.getUsersFlights(name)
}

