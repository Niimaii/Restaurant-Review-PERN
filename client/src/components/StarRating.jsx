import React from "react";

function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i className="fa-solid fa-star text-warning"></i>);
    }
    // Check to see if i is equal to the ceiling of rating. So if rating = 1.2, then the ceiling is 2. Then check if it's an integer with !Number.isInteger(rating))
    else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(
        <i className="fa-regular fa-star-half-stroke text-warning"></i>
      );
    } else {
      stars.push(<i className="fa-regular fa-star text-warning"></i>);
    }
  }
  return <>{stars}</>;
}

export default StarRating;
