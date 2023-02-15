require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const db = require("./db/index.js");
const app = express();
const cors = require("cors");

app.use(cors());
// This takes the information from the page (which is in JSON) and attack it to our request under body (i.e req.body). https://youtu.be/J01rYl9T3BU?t=6914
app.use(express.json());

/* When the front end does a get method towards 
http://localhost:3001/getRestaurants This will hit the route we established bellow
*/
// Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    // db.query is a promise
    const results = await db.query("select * from restaurants");

    //This outputs on the website page
    // Status allows us to send a custom code when this runs
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        // Instead ofhard coding the data being returned for the restaurants, we are gathering the data straight from the data base
        restaurants: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Get a individual restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    // This is the safe way to do it, notice that we have $1 at the end. This represents the value given the array to the right.
    const restaurant = await db.query(
      "select * from restaurants where id = $1",
      [req.params.id]
    );

    const reviews = await db.query(
      "select * from reviews where restaurant_id = $1",
      [req.params.id]
    );

    res.status(200).json({
      status: "success",
      data: {
        restaurant: restaurant.rows[0],
        reviews: reviews.rows,
      },
    });
  } catch {
    console.log(err);
  }
});

// Create a Restaurant
app.post("/api/v1/restaurants", async (req, res) => {
  console.log(req.body);

  try {
    // "returning *" returns the data added we added to the table
    const results = await db.query(
      "INSERT INTO restaurants (name,location, price_range) values ($1, $2, $3) returning *",
      [req.body.name, req.body.location, req.body.price_range]
    );
    res.status(201).json({
      status: "success",
      data: {
        restaurant: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Update Restaurants
app.put("/api/v1/restaurants/:id", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );

    console.log(results);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Delete Restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = db.query("delete from restaurants where id = $1", [
      req.params.id,
    ]);

    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});
