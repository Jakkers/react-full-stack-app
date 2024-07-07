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
// get endpoint for training page and data
app.get("/training", async (_, response) => {
  const dbData = await db.query(
    `SELECT
id,
to_char(date, 'DD Mon YYYY')
AS formated_date,
duration,
distance,
pace,
notes
FROM running_posts WHERE category_id = 24`
  );
  console.log(dbData);
  response.json(dbData);
});

// get endpoint for personal best
app.get("/personalBest", async (_, response) => {
  const dbData = await db.query(
    `SELECT 
  MIN(pace) pace
FROM 
  running_posts 
ORDER BY 
  pace;`
  );
  console.log(dbData);
  response.json(dbData);
});

// get endpoint for recovery page and data
app.get("/recovery", async (_, response) => {
  const dbData = await db.query(
    `SELECT
id,
to_char(date, 'DD Mon YYYY')
AS formated_date,
duration,
distance,
pace,
notes
FROM running_posts WHERE category_id = 25`
  );
  console.log(dbData);
  response.json(dbData);
});

//POST endpoint --> receive the body from client and INSERT the body into the database

// Now to insert into the client from the database
app.post("/runningPosts", async (request, response) => {
  const { date, duration, distance, pace, notes, category } = request.body;
  console.log(request.body);
  try {
    await db.query(
      `INSERT into running_posts (date,duration,distance,pace,notes,category_id) VALUES ($1, $2, $3, $4, $5, $6)`,
      [date, duration, distance, pace, notes, category]
    );
    response.status(200).json({ success: true });
  } catch (error) {
    console.log("Insert not working", error);
    response.status(500).json({ success: false });
  }
});

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
