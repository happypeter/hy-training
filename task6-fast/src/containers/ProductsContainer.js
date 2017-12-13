import React from 'react'
import Products from '../components/Products'
import { connect } from 'react-redux'

const ProductsContainer = props => <Products {...props} />

const mapStateToProps = state => ({
  products: state.product.all
})

export default connect(mapStateToProps)(ProductsContainer)
