import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectProduct} from "../redux/actions";
import { bindActionCreators } from "redux";

class ProductList extends Component {

    render() {
      const { products } = this.props
      const productList = products.map((product) => {
          return (
              <li className="list-group-item" key={product.title} onClick={()=>this.props.selectProduct(product)}>
                  {product.title}  |  {product.price}

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

export default connect(mapStateToProps,{
  selectProduct
})(ProductList)
