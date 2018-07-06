import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import route from './route.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        {route}
      </div>
    );
  }
}

export default App;
