import axios from 'axios'

export const addToCart = id => {

  return dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
      res => {
        const title = res.data.title
        dispatch({ type: 'ADD_TO_CART', title })
      }
    )
  }
}
