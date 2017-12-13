import React from 'react'
import Cart from '../components/Cart'
import { connect } from 'react-redux'
import { getCartProducts } from '../selectors/cartSelectors.js'

const CartContainer = props => <Cart {...props} />

const mapStateToProps = state => ({
  cartProducts: getCartProducts(state)
})

export default connect(mapStateToProps)(CartContainer)
