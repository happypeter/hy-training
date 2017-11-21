import React, { Component } from 'react'

class Products extends Component {

  constructor(props) {
<<<<<<< HEAD
      super(props);
      // this.clickHandle = this.clickHandle.bind(this)
      this.state = {
        cnt:0
      }
=======
    super(props)
    this.clickHandle = this.clickHandle.bind(this)
    this.state = {
      cnt:0
    }
>>>>>>> d03c5465507aef85684259eaff41185587fe076d
  }

  clickHandle(product) {
    this.props.onUpdateTest(product.name,product.price)
  }

<<<<<<< HEAD
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
=======
  countNum(cnt) {
    cnt++
     this.setState({
       cnt
     })
    this.props.onCount(cnt)
  }

  render () {
    const list = this.props.products.map((product,i) =>(
      <div data-value={product.name} key={i}>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <button onClick={this.clickHandle.bind(this,product)}>buy</button>
      </div>
    ))
    
    return (
      <div className='Products'>
        {list}
        <button onClick={this.countNum.bind(this,this.state.cnt)}>+</button>
      </div>
    )
>>>>>>> d03c5465507aef85684259eaff41185587fe076d
  }

export default Products
