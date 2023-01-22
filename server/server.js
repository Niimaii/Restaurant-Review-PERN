require("dotenv").config();
const express = require("express");
const app = express();
/* When the front end does a get method towards 
http://localhost:3001/getRestaurants This will hit the route we established bellow
*/
app.get("/getRestaurants", (req, res) => {
  res.json({
    status: "success",
    restaurant: "mcdonalds",
  });
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});

console.log("testing");
