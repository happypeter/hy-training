import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectProduct} from "../redux/actions";
import { bindActionCreators } from "redux";

class ProductList extends Component {

    handleClick = (product) => {
      console.log('clicked')
      this.props.dispatch(selectProduct(product))
    }

    render() {
      const { products } = this.props
      const productList = products.map((product) => {
          return (
              <li className="list-group-item" key={product.productName} onClick={()=>this.handleClick(product)} >
                  {product.productName}  |  {product.price}
              </li>
          )
      })
        return(
            <ul className="list-group col-sm-4">
                {productList}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps)(ProductList)
