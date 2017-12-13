import { combineReducers } from 'redux'

const initState = [
  { id: '1', productName: 'name1', price: 20 },
  { id: '2', productName: 'name2', price: 30 },
  { id: '3', productName: 'name3', price: 40 }
]

const all = (state = initState , action) => {
  switch (action.type) {
    case 'STH':
      return state
    default:
      return state
  }
}

export default combineReducers({
  all
})
