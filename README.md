# Restaurant Finder

A website where users can review restaurants and add new restaurants for others to review.

## Prerequisites

A SQL based database must be used and the tables are formatted like so:

```sql
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
```

An .env file is used/referenced in the code, make sure to add an .env file in the server folder that looks like this:

```bash
PORT= Server Port Number
PGUSER= Postgres username (default is 'postgres')
PGHOST=localhost
PGPASSWORD= Your database password
PGDATABASE= Table name in your database
PGPORT= Postgres port number (default is 5432)
```

## Installation

Create a project in your choice of IDE and run the following command:

```bash
git clone https://github.com/Niimaii/Restaurant-Review-PERN.git
```
