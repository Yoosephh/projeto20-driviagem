import { userRepositories } from "../repositories/user.repositories.js";

export async function userRegistration(firstName, lastName){

  await userRepositories.registerUser(firstName, lastName)

}
export async function cityRegistration(name) {

  await userRepositories.joinCity(name)

}

