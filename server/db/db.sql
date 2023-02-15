CREATE TABLE reviews(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating >= 1 and rating <= 5)
);

INSERT INTO reviews (restaurant_id, name, review, rating) values (11, 'Steve', 'Good enough I guess', 3);

INSERT INTO reviews(restaurant_id, name, review, rating) values (1, 'Nimai', 'Amazing vegan restaurant! I would eat there everyday if I could', 5);