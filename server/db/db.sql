CREATE TABLE reviews(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating >= 1 and rating <= 5)
);

CREATE TABLE restaurants(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL
);


INSERT INTO reviews (restaurant_id, name, review, rating) values (11, 'Steve', 'Good enough I guess', 3);

INSERT INTO reviews(restaurant_id, name, review, rating) values (1, 'Nimai', 'Amazing vegan restaurant! I would eat there everyday if I could', 5);

select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;