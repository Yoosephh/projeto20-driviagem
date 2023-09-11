import db from "../database/database.connection.js";

async function registerFlight(origin, destination, date) {
  return await db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3::date)`, [origin, destination, date])
}

async function registerTravel(passengerId, flightId) {
  return await db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2)`, [passengerId, flightId])
}

async function getFlights(origin, destination, biggerDate, smallerDate){
  return await db.query(`SELECT
  f.id,
  orig.name AS origin,
  dest.name AS destination,
  f.date AS date
FROM
  flights AS f
JOIN
  cities AS orig
ON
  f.origin = orig.id
JOIN
  cities AS dest
ON
  f.destination = dest.id
WHERE
  ($1::integer IS NULL OR f.origin = $1::integer)
  AND ($2::integer IS NULL OR f.destination = $2::integer)
  AND (
    ($3::date IS NULL AND $4::date IS NULL)
    OR (
      ($3::date IS NOT NULL AND $4::date IS NOT NULL)
      AND f.date BETWEEN $4::date AND $3::date
    )
  )
ORDER BY
  f.date ASC;`, [origin, destination, biggerDate, smallerDate])
}

export const flightRepositories = { registerFlight, registerTravel, getFlights }