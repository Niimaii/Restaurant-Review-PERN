require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

/* When the front end does a get method towards 
http://localhost:3001/getRestaurants This will hit the route we established bellow
*/
// Get all restaurants
app.get("/api/v1/restaurants", (req, res) => {
  console.log("Route handler ran!");
  //This outputs on the website page
  // Status allows us to send a custom code when this runs
  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["mcdonalds", "wendys"],
    },
  });
});

// Get a individual restaurant
app.get("/api/v1/restaurants/:restaurantid", (req, res) => {
  console.log(req.params);
  console.log("This ran");
});

// Create a Restaurant
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req), "this also ran";
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});
