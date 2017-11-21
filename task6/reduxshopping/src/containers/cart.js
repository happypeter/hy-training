import React, { Component } from 'react'
import { connect } from 'react-redux';

class Cart extends Component {
    render() {
       if (!this.props.product) {
           return <div>Empty</div>
       }
       return (
           <div>
               <div>Title:{this.props.product.title}</div>
               <div>Price:{this.props.product.price}</div>

           </div>
       )
    }


}

function mapStateToProps(state) {
    return {
        product: state.activeProduct
    }
}

export default connect(mapStateToProps)(Cart);