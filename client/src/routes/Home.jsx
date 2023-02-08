import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import AddRestaurant from "../components/AddRestaurant";

const Home = () => {
  return (
    <>
      <Header />
      <AddRestaurant />
    </>
  );
};

export default Home;
