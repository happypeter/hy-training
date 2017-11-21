const initState = [
  // {
  //   productName: 'xxx',
  //   price: 'xxx'
  // }
]

export default function (state = [], action) {
    switch (action.type) {
        case "PRODUCT_SELECTED":
            return [
              ...state,
              action.product
            ]
    }
    return state;
}
