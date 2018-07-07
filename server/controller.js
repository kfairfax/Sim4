module.exports = {

    getProducts:  (req, res) => {
        const db = req.app.get('db');
        db.get_products()
        .then(products => res.status(200).send(products))
        .catch(() =>res.status(500).send('getProducts failed'))
    },

    postProduct: (req, res) => {
        const db = req.app.get('db');
        const{product_id, quantity} = req.body;
        db.post_product([product_id, quantity])
        .then(() => res.status(200).send('You selected this product'))
        .catch(() =>res.status(500).send('postProduct failed'))
    }
}