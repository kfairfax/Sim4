UPDATE cart
SET quantity = quantity +1
where product_id = $1;
