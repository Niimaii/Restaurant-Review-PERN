import React from "react";

const AddRestaurant = () => {
  return (
    <div className="mb-4">
      <form className="" action="">
        <div className="restForm form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="name" />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="location"
            />
          </div>
          <div className="col">
            <select className="priceSelect custom-select my-1 mr-sm-2" id="">
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button className="formBtn btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
