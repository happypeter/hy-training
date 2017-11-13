import React, { Component } from 'react'
import { Redirect } from 'react-router'

class Child extends Component {
  constructor(props) {
    super(props);

    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.onChangePwdHandle = this.onChangePwdHandle.bind(this);
    this.onsubmittedHandle = this.onsubmittedHandle.bind(this);
    
  }
  onChangeHandle(e) {
    e.preventDefault
      this.props.onUpdateUserName(e.target.value)

  }
  onChangePwdHandle(e) {
    this.props.onUpdatePassWord(e.target.value)
  }

  onsubmittedHandle(e) {
    e.preventDefault()

  }
  render () {
    return (
      <div className='child'>
        <h2>{this.props.username}</h2>
        <form onSubmit={this.onsubmittedHandle}>
          username: <input type="text" onChange={this.onChangeHandle}/>
          password: <input type="password" onChange={this.onChangePwdHandle}/>
          <input type="submit" value="submit" />
        </form>
        {this.props.password === undefined ? '123':this.props.password }

      </div>
    )
  }
}

export default Child
