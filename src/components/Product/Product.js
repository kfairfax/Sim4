import React from 'react';

const Product = (props) => {

    const {product} = props;

    return(
        <div>
            <span>Name: {product.product_name}</span>
            <br/>
            <span>Description: {product.description}</span>
            <br/>
            <span>Color: {product.color}</span>
            <br/>
            <span>Size: {product.size}</span>
            <br/>
            <span>Price: {product.price}</span>
            <br/>
            <img src={product.product_image} alt='' />
        </div>
    )
};

export default Product;