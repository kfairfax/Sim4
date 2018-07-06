CREATE TABLE cart (
  id SERIAL PRIMARY KEY,
  product_id INT REFERENCES product (id),
  quantity INT
);