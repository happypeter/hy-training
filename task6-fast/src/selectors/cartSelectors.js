import { createSelector } from 'reselect'
import { getUsersById } from './userSelectors'

const getProducts = state => state.product.all
const getCartIds = state => state.cart.all

export const getCartProducts = createSelector(
  getProducts,
  getCartIds,
  (products, ids) => products.filter(t => t.id === id)
)
