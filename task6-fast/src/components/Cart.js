import React, { Component } from 'react'
import styled from 'styled-components'

class Cart extends Component {
  render () {
    const { cartProducts } = this.props
    console.log('cartProducts', cartProducts);
    const list = cartProducts.map( t => {
      return (
        <div key={t} >
          { t.productName }
        </div>
      )
    })
    return (
      <Wrap>
        { list }
      </Wrap>
    )
  }
}

export default Cart

const Wrap = styled.div``
