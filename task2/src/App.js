import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Component
import Child from './Child'

class App extends Component {
  state = {
    test: 'hello'
  }

  changeHandle = e => {
    e.preventDefault();
    this.setState({
      test: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <input type="text" onChange={this.changeHandle}/>
          <Child test={this.state.test} />
        </p>
      </div>
    );
  }
}

export default App;
