import db from "../database/database.connection.js";

async function registerFlight(origin, destination, date) {
  return await db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3)`, [origin, destination, date])
}

export const flightRepositories = { registerFlight }