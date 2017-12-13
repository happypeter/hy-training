import React, { Component } from 'react'
import styled from 'styled-components'

class Cart extends Component {
  render () {
    const { all } = this.props
    const list = all.map( t => {
      return (
        <div key={t} >
          { t }
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
