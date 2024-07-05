//Add SQL queries here (create tables, ...)
import { db } from "./server.js";

//creating the table in database
db.query(`CREATE TABLE IF NOT EXISTS running_posts(
    id SERIAL PRIMARY KEY,
    date DATE,
    duration INTERVAL,
    distance DECIMAL,
    pace INTERVAL,
    notes TEXT
);`);

db.query(`CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255)
);`);

db.query(`CREATE TABLE IF NOT EXISTS categories(
    id SERIAL PRIMARY KEY,
    category VARCHAR(255)
);`);

//inserting data
