SELECT SUM(A.subtotal) AS total FROM
(SELECT price * quantity AS subtotal FROM cart
JOIN product ON cart.product_id = product.id) AS A;