import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Component
import Child from './Child'


class App extends Component {

  constructor(props) {
   super(props);

   this.state = {
       test: 'hello'
   }
   this.onUpdateTest = this.onUpdateTest.bind(this)
 }

  onUpdateTest(test) {
    this.setState({
      test
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
          <Child onUpdateTest={this.onUpdateTest.bind(this)} test={this.state.test}/>
        </p>
      </div>
    );
  }
}

export default App;
