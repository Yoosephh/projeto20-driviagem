import httpStatus from "http-status"

import { cityRegistration, userRegistration } from "../services/user.services.js"

export async function newPassenger(req,res){
    const {firstName, lastName} = req.body

    await userRegistration(firstName, lastName)
    return res.sendStatus(httpStatus.CREATED)
}

export async function newCity(req, res) {
  const {name} = req.body;

  await cityRegistration(name)
  return res.sendStatus(httpStatus.CREATED)
}
