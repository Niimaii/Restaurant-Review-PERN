import React from "react";
import { Outlet } from "react-router-dom";

const RestaurantDetailPage = () => {
  return (
    <>
      <div>RestaurantDetailPage</div>
      <Outlet />
    </>
  );
};

export default RestaurantDetailPage;
