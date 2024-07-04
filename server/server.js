//import packages
import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

// assign app to use express
const app = express();

//assign express to use packages
app.use(cors());
app.use(express.json());

//configure dotenv
dotenv.config();

//Get supabase pg connection from dotenv file
const dbConnectionString = process.env.DATABASE_URL;

//initialise database and export for use in seed.js
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

//assign port
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Your server is running on port: ${PORT}`);
});

//create endpoint

//GET endpoint
app.get("/", (request, response) => {
  response.json({ message: "Insert roude joke here" });
});

//GET endpoint --> SELECT data from database

//POST endpoint --> receive the body from client and INSERT the body into the database

//Todo Stretch goals: UPDATE and DELETE endpoints

//PUT / Update endpoint
app.put("/updateFormData/:id", async (request, response) => {
  const dataId = request.params.id;
  const result = await db.query(
    `UPDATE table_name SET column_name = $1, second_column = $2 WHERE id = $3 RETURNING *`,
    [data_one, data_two, dataId]
  );
  response.json(result.rows);
});

//DELETE endpoint

app.delete("/deleteFormData/:id", async (request, response) => {
  const dataId = request.params.id;
  const result = await db.query(
    `DELETE FROM table_name WHERE id = $1 RETURNING *`,
    [dataId]
  );
  response.json(result.rows);
});
