import React, { Component } from 'react'

class Child extends Component {

  constructor(props) {
      super(props);
      this.onChangeHandle = this.onChangeHandle.bind(this);
  }

  onChangeHandle(e) {
    e.preventDefault;
    this.props.onUpdateTest(e.target.value)
  }

  render () {
    return (
      <div className='Child'>
        <input type="text" onChange={this.onChangeHandle} />
        <p>{this.props.test}</p>
      </div>
    )
  }
}

export default Child
