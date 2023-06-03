import React from 'react';
import StarRating from './StarRating';

function Reviews({ reviews }) {
  return (
    <div className='review_container'>
      {reviews.map((review) => {
        return (
          <div
            key={review.id}
            className='card_review'
            style={{ maxWidth: '30%' }}
          >
            <div className='review_box'>
              <span>{review.name}</span>
              <span>
                <StarRating rating={review.rating} />
              </span>
            </div>
            <div className='review_text_container'>
              <p className='review_text'>{review.review}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Reviews;
