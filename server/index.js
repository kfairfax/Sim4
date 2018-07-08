const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const app = express();
const massive = require('massive');
require('dotenv').config();

app.use(bodyParser.json());

const port = 4000;
app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})

massive(process.env.CONNECTION_STRING)
    .then(db =>app.set('db', db));

app.get('/api/product', controller.getProducts);
app.post('/api/products', controller.postProduct);
app.get('/api/cart', controller.getCart);
app.delete('/api/cart/:id', controller.deleteProduct);
app.put('/api/cart_quantity/:id', controller.updateQuantity);
app.get('/api/cart_total', controller.getCartTotal);
app.delete('/api/cart_checkout', controller.deleteCart);
app.get('/api/get_cart_product/:id', controller.getCartProduct);
app.put('/api/product_quantity/:id', controller.checkQuantity);