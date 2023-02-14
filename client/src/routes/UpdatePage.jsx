import React from "react";
import { Outlet } from "react-router-dom";
import UpdateRestaurant from "../components/UpdateRestaurant";

const UpdatePage = () => {
  return (
    <div>
      <h1 className="text-center">Update Restaurant</h1>
      <UpdateRestaurant />
    </div>
  );
};

export default UpdatePage;
