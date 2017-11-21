import React, { Component } from 'react'

class Products extends Component {

  constructor(props) {
      super(props);
      // this.clickHandle = this.clickHandle.bind(this)
      this.state = {
        cnt:0
      }
  }


  clickHandle(product) {
    console.log(product.name)
    //console.log(this.props.onUpdateTest(product.name, product.price))
    this.props.onUpdateTest(product.name,product.price)
  }
  countNum(cnt) {
    //cnt++
   this.setState({
     cnt : cnt + 1
   })
    this.props.onCount(cnt)
  }


  render () {

  const list = this.props.products.map((product,i) =><div data-value={product.name} key={i}> <p>{product.name}</p> <p>{product.price}</p><button onClick={()=>this.clickHandle(product)}>buy</button> </div>);
      return (
        <div className='Products'>
          {list}
          <button onClick={this.countNum.bind(this,this.state.cnt)}>+</button>
        </div>
      )
    }
  }

export default Products
