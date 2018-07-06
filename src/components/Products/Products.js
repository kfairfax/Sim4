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
    axios.get('/api/products').then(res => {
      console.log(res.data)
      this.setState({ products: res.data })
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
            </div>
          ))
        }
      </div>
    );
  }
}

export default Products;