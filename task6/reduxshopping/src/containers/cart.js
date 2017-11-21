import React, { Component } from 'react'
import { connect } from 'react-redux';

class Cart extends Component {
    render() {
      const { cart } = this.props
      const productList = cart.map(p => {
        return <li key={p.productName}>{p.productName}</li>
      })
       return (
           <div>
              { productList }
           </div>
       )
    }


}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);
