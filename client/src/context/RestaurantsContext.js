import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);

  return (
    // Keep in mind here that in value we are passing down an Object. However instead of doing: { restaurants: restaurants, setRestaurants: setRestaurants }. We just do it the way shown bellow
    <RestaurantsContext.Provider value={{ restaurants, setRestaurants }}>
      {props.children}
    </RestaurantsContext.Provider>
  );
};
