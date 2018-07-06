import React, { Component } from 'react';
import './App.css';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Products/>
        <Cart/>
      </div>
    );
  }
}

export default App;
