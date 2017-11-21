import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from '../containers/product-list';
import Cart from '../containers/cart'


class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductList/>
        <Cart/>
      </div>
    );
  }
}

export default App;
