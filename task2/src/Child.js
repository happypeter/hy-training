import React, { Component } from 'react'

class Child extends Component {
  render () {
    return (
      <div className='Child'>
        {this.props.test}
      </div>
    )
  }
}

export default Child
