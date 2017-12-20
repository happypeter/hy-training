import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

class App extends Component {

  handleClick = id => {
    this.props.addToCart(id)
  }

  render() {
    return (
      <div>
        App: { this.props.all }
        <button onClick={() => this.handleClick(1)}>
          1
        </button>
        <button onClick={() => this.handleClick(2)}>
          2
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  all: state.cart.all
})

export default connect(mapStateToProps, {
  addToCart
})(App)
