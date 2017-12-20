import { combineReducers } from 'redux'

const all = (state = '0' , action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return state;
    default:
      return state
  }
}

export default combineReducers({
  all
})
