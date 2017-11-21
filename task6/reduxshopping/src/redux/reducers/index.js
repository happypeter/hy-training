import { combineReducers } from 'redux'
import ProductsReducer from './reducer_products'
import cart from './cart'

export default combineReducers({
    products: ProductsReducer,
    cart
})
