import db from "../database/database.connection.js";

async function registerUser(firstName, lastName){
  return await db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)`, [firstName, lastName])
}

async function joinCity(name){
  return await db.query(`INSERT INTO cities (name) VALUES ($1)`, [name])
}



export const userRepositories = { registerUser, joinCity }