import db from "../database/database.connection.js";

async function registerUser(firstName, lastName){
  return await db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)`, [firstName, lastName])
}

async function joinCity(name){
  return await db.query(`INSERT INTO cities (name) VALUES ($1)`, [name])
}

async function getUsersFlights(name){
  return await db.query(`SELECT CONCAT(passengers."firstName", ' ', passengers."lastName") AS passenger, COUNT(travels."passengerId") AS travels FROM passengers LEFT JOIN travels ON passengers.id = travels."passengerId" WHERE ($1::text IS NULL OR passengers."firstName" LIKE '%' || $1::text || '%' OR passengers."lastName" LIKE '%' || $1::text || '%') GROUP BY passengers.id ORDER BY travels DESC;`, [name])
}

export const userRepositories = { registerUser, joinCity, getUsersFlights }