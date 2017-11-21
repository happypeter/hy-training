import { combineReducers } from 'redux'
import ProductsReducer from './reducer_products'
import ActiveProduct from './reducer_cart'

export default combineReducers({
    products: ProductsReducer,
    activeProduct: ActiveProduct
})
