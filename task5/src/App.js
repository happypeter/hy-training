import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import  Products from './Products'
import Cart from './Cart'

class App extends Component {
  state = {
      products: [{name:'test1',price:'123'},{name:'test2',price:'124'}],
      item:' ',
      price:' ',
      cnt: 0
    }

  onCount(cnt) {
    this.setState({
      cnt
    })
  }

  onUpdateTest(item,price){
    console.log('onUpdateTest....')
    this.setState({
      item,
      price
    })
  }


  render() {
    return (
      <div className="App">
        <Products
          products={this.state.products}
          onUpdateTest={this.onUpdateTest.bind(this)}
          onCount={this.onCount.bind(this)} />
        <Cart
          item={this.state.item}
          price={this.state.price}
          cnt={this.state.cnt} />
      </div>
    )
  }
}

export default App
