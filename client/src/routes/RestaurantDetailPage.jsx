import React, { useContext, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantFinder from '../apis/RestaurantFinder';
import StarRating from '../components/StarRating';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  useEffect(() => {
    try {
      // We are making this a function because again, async will return a value, which useEffect does not like. So this is a work around.
      const fetchData = async () => {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  // This will only load if selectedRestaurant has data
  return (
    <div className='review_page_container'>
      <div className='review_page'>
        {selectedRestaurant && (
          <>
            <h1 className='text-center display-1'>
              {selectedRestaurant.restaurant.name}
            </h1>
            <div className='text-center'>
              <StarRating
                rating={selectedRestaurant.restaurant.average_rating}
              />
              <span className='text-warning ml-1'>
                {selectedRestaurant.restaurant.count
                  ? `(${selectedRestaurant.restaurant.count})`
                  : '(0)'}
              </span>
            </div>
            <div className='mt-3'>
              <Reviews reviews={selectedRestaurant.reviews} />
            </div>
            <AddReview />
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetailPage;
