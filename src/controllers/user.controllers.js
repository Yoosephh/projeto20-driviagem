import httpStatus from "http-status"

import { cityRegistration, sendUserFlights, userRegistration } from "../services/user.services.js"

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
export async function getUserFlights(req, res) {
  const name = req.query.name

  const userFlights = await sendUserFlights(name)
  return res.status(httpStatus.OK).send(userFlights.rows)
}
