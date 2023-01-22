CREATE TABLE products (
    id INT, 
    name VARCHAR(50),
    price INT,
    on_sale BOOLEAN
);

-- We start the table with a id column, this way they are all identified by a number.
CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

-- Add data to a table
INSERT INTO restaurants (id, name, location, price_range) values (123, 'mconalds', 'new york', 3);
