import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import AddRestaurant from "../components/AddRestaurant";
import RestaurantList from "../components/RestaurantList";

const Home = () => {
  return (
    <>
      <Header />
      <AddRestaurant />
      <RestaurantList />
    </>
  );
};

export default Home;
