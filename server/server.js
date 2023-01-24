require("dotenv").config();
const express = require("express");
const app = express();

/* When the front end does a get method towards 
http://localhost:3001/getRestaurants This will hit the route we established bellow
*/
app.get("/api/v1/restaurants", (req, res) => {
  //This outputs on the website page
  // Status allows us to send a custom code when this runs
  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["mcdonalds", "wendy's"],
    },
  });
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});

console.log("testing");
