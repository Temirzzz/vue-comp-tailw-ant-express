// import 'dotenv/config'
import dotenv from 'dotenv';
dotenv.config({ override: true });
import mysql from 'mysql2'

export const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASWD,
  database: process.env.DB
});