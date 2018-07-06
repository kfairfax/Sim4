CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  product_name VARCHAR(40),
  description TEXT,
  size INTEGER,
  color TEXT,
  product_image TEXT
);