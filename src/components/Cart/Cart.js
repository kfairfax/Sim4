import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';


class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
          products: [],
          quantity: 1,
          total: 0
        }
    }

    componentDidMount(){
      this.getCart();
      
      axios.get('/api/cart_total').then(res => {
        // console.log(res.data[0].total)
        this.setState({total: res.data[0].total})
      })
    }

getCart(){
  axios.get('/api/cart').then(res =>{
    this.setState({products: res.data})
  })
}

handleDelete(id){
  axios.delete('/api/cart/' + id).then(res => {
    window.location.reload();
  })
}

handleQuantityChange(id, e){
  // console.log(e)
axios.put('/api/cart_quantity/' + id, {
  quantity: e
}).then(res => {
 this.setState({quantity: e})
})
}

handleCheckout(){
  axios.delete('/api/cart_checkout')
}


  render() {

    const{products, quantity, total} = this.state;
    
    return (
      <div className="Cart">
      Cart
      
      {
        products.map((product, i) => (
          <div key = {i}>
              <Product
              product = {product}
              />
              <select value = {quantity} onChange = {(e) => {this.handleQuantityChange(product.id, e.target.value)}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              
              <button onClick = {() => {this.handleDelete(product.id)}}>Delete</button>
          </div>
        ))
      }
        <br/>
          <span>Your Total is: ${total} </span>
        <br/>
         <button onClick = {() => {this.handleCheckout()}}>Checkout</button>
      </div>
    );
  }
}

export default Cart;