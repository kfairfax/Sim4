import React, { Component } from 'react';
import Product from '../Product/Product';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
          products: []
        }
    }


  render() {

    const{products} = this.state;
    
    return (
      <div className="Cart">
      Cart
      
      {
        products.map((product, i) => (
          <div key = {i}>
              <Product
              product = {product}
              />
          </div>
        ))
      }
      </div>
    );
  }
}

export default Cart;