import React, { Component } from 'react'
import styled from 'styled-components'
import store from '../store'

class Products extends Component {

  handleClick = id => {
    console.log('clicked', id)
    store.dispatch({ type: 'ADD_TO_CART', id })
  }

  render () {
    const { products } = this.props
    const list = products.map( t => {
      return (
        <div key={t.productName}>
          {t.productName}--{t.price}
          <button onClick={() => this.handleClick(t.id)}> 购买 </button>
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

export default Products

const Wrap = styled.div``
