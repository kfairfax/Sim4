module.exports = {

    getProducts: (req, res) => {
        const db = req.app.get('db');
        db.get_products()
            .then(products => res.status(200).send(products))
            .catch(() => res.status(500).send('getProducts failed'))
    },

    postProduct: (req, res) => {
        const db = req.app.get('db');
        const { product_id, quantity } = req.body;
        db.post_product([product_id, quantity])
            .then(() => res.status(200).send('You selected this product'))
            .catch(() => res.status(500).send('postProduct failed'))
    },

    getCart: (req, res) => {
        const db = req.app.get('db');
        db.get_cart()
            .then((cart) => res.status(200).send(cart))
            .catch((err) => {
                res.status(500).send('getCard failed')
                console.log(err)
            })
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.delete_product([id])
            .then(() => res.status(200).send('deleteProduct successful'))
            .catch(() => res.status(500).send('deleteProduct failed'))
    },

    updateQuantity: (req, res) => {
        const db = req.app.get('db');
        // console.log(req.params)
        const { id } = req.params;
        // console.log(req.body);
        const { quantity } = req.body;
        db.update_quantity([id, quantity])
            .then(() => res.status(200).send('cart updated'))
            .catch((err) => {
                res.status(500).send('updateQuantity failed')
                // console.log(err)
            })
    },

    getCartTotal: (req, res) => {
        const db = req.app.get('db');
        db.get_cart_total()
            .then((total) => res.status(200).send(total))
            .catch(() => res.status(500).send('getCartTotal failed'))
    },

    deleteCart: (req, res) => {
        const db = res.app.get('db');
        db.delete_cart()
            .then(() => res.status(200).send('cart emptied'))
            .catch((err) => {
                res.status(500).send('deleteCart failed')
                console.log(err)
            })
    },

    getCartProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.get_cart_product([id])
            .then((cart) => res.status(200).send(cart))
            .catch(() => {
                res.status(500).send('getCard failed')
                // console.log(err)
            })
    },

    checkQuantity: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        const { quantity } = req.body;
        db.check_quantity([id, quantity])
            .then(() => res.status(200).send('cart updated'))
            .catch(() => {
                res.status(500).send('updateQuantity failed')
            })

    }
}