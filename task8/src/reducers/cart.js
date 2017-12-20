import { combineReducers } from 'redux'

const all = (state = 'TODO' , action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return action.title;
    default:
      return state
  }
}

export default combineReducers({
  all
})
