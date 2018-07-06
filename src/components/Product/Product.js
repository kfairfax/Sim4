import React from 'react';

const Product = (props) => {

    const {product} = props;

    return(
        <div>
            Product
            <span>{product.product_name}</span>
            <span>{product.description}</span>
            <span>{product.color}</span>
            <span>{product.size}</span>
            <span>{product.price}</span>
            <img src={product.product_image} alt='' />
        </div>
    )
};

export default Product;