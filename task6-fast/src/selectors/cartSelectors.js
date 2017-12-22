import { createSelector } from 'reselect'

const getProducts = state => state.product.all

const getProductsById = createSelector(
  getProducts,
  products => products.reduce((obj, product) => {
    obj[product.id] = product
    return obj
  }, {})
)

const getCartIds = state => state.cart.all

export const getCartProducts = createSelector(
  getProductsById,
  getCartIds,
  (products, ids) => ids.map(id => products[id])
)
