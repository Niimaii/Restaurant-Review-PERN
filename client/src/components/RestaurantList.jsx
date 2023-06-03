import React, { useContext, useEffect } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';
import { useNavigate } from 'react-router-dom';
import StarRating from './StarRating';

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  // This is "history"
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get('/');
        setRestaurants(response.data.data.restaurants);
        console.log(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await RestaurantFinder.delete(`${id}`);
      setRestaurants(
        // Only add elements.id in the new array that DOES NOT match the id of the element we just delted. If it does match then it's not included in the new Array.
        restaurants.filter((restaurant) => {
          return restaurant.id !== id;
        })
      );
      console.log('restaurants list:', restaurants);
    } catch (err) {}
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`restaurants/${id}/update`);
  };

  const handleRestaurantSelect = (id) => {
    navigate(`restaurants/${id}`);
  };

  const renderRating = (restaurant) => {
    // If there is no reviews, render this
    if (!restaurant.count) {
      return <span className='text-warning'>0 reviews</span>;
    }
    return (
      <>
        <StarRating rating={restaurant.average_rating} />
        <span className='text-warning ml-1'>({restaurant.count})</span>
      </>
    );
  };

  return (
    <div className='restaurant_list_container'>
      <div className='restaurant_list'>
        <table className='table table-hover table-dark'>
          <thead>
            <tr className='table-primary font-size'>
              <th scope='col'>Restaurant</th>
              <th scope='col'>Location</th>
              <th scope='col'>Price</th>
              <th scope='col' className='th_ratings'>
                Ratings
              </th>
              <th scope='col'>Edit</th>
              <th scope='col'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* This will only run if restaurants exists */}
            {restaurants &&
              restaurants.map((restaurant) => {
                return (
                  <tr
                    className='font-size'
                    onClick={() => handleRestaurantSelect(restaurant.id)}
                    key={restaurant.id}
                  >
                    <td className='rest_btn'>{restaurant.name}</td>
                    <td>{restaurant.location}</td>
                    <td>{'$'.repeat(restaurant.price_range)}</td>
                    <td className='td_ratings'>{renderRating(restaurant)}</td>
                    <td className='td_buttons'>
                      <button
                        onClick={(e) => handleUpdate(e, restaurant.id)}
                        className='btn btn-warning'
                      >
                        Update
                      </button>
                    </td>
                    <td className='td_buttons'>
                      <button
                        onClick={(e) => handleDelete(e, restaurant.id)}
                        className='btn btn-danger'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RestaurantList;
