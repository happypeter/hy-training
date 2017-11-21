import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectProduct} from "../actions/index";
import { bindActionCreators } from "redux";

class ProductList extends Component {


    renderList() {
        return this.props.products.map((product) => {
            return (
                <li className="list-group-item" key={product.title} onClick={()=>this.props.selectProduct(product)}>
                    {product.title}  |  {product.price}

                </li>
            )
        })
    }

    render() {
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectProduct: selectProduct},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList)
