import dayjs from "dayjs";
import { flightRepositories } from "../repositories/flight.repositositories.js";
import { userErrors } from "../error/user.errors.js";

export async function flightRegistration(origin, destination, date) {
  if(typeof date === "number") throw userErrors.dateFormat()
  const splitDate = date.split("-");
  const day = parseInt(splitDate[0], 10);
  const month = parseInt(splitDate[1] - 1, 10);
  const year = parseInt(splitDate[2], 10);
  const dateAdjusted = new Date(year, month, day);
  const dateTimestamp = dateAdjusted.getTime();
  const nowTimetamp = Date.now();
  const timeDifference = dateTimestamp - nowTimetamp
  if(timeDifference <= 0) throw userErrors.dateError()

  console.log(newDate)

  await flightRepositories.registerFlight(origin, destination, date)

}