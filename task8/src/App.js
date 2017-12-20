import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

class App extends Component {

  handleClick = () => {
    this.props.addToCart()
  }

  render() {
    return (
      <div>
        App: { this.props.all }
        <button onClick={this.handleClick}>
          Add
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
