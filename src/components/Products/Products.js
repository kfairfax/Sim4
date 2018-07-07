import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios.get('/api/product').then(res => {
      // console.log(res.data)
      this.setState({ products: res.data })
    })
  }

  addToCart(product) {
    // console.log(product)
    axios.post('/api/products', {
      product_id: product.id,
      quantity: 1
    })
      .then(res => {this.props.history.push('/cart')
      // console.log(res)
    })
      
  }

  render() {

    const { products } = this.state;

    return (

      <div className="Products">
        Products
{
          products.map((product, i) => (
            <div key={i}>
              <Product
                product={product} />
              <button onClick={() => this.addToCart(product)}>Add To Cart</button>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Products;