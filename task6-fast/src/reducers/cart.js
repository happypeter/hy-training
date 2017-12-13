import { combineReducers } from 'redux'

const all = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':

      if (state.includes(action.id)) {
        return state
      } else {
        return [
          ...state,
          action.id
        ]
      }
    default:
      return state
  }
}

export default combineReducers({
  all
})
