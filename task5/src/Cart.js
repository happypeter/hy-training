import React, { Component } from 'react'

class Cart extends Component {
  render () {
    return (
      <div className='Cart'>
        name: {this.props.item}
        price:  {this.props.price}
        num: {this.props.cnt}
        total: {this.props.price * this.props.cnt}
      </div>
    )
  }
}

export default Cart
