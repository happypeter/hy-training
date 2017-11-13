import React, { Component } from 'react';
import logo from './logo.svg';
import Child from './components/ChildApp'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'hongyi',
      password: '123'
    }


  }
  onUpdateUserName(username) {
    this.setState({
      username
    })
  }


  onUpdatePassWord(password) {
    this.setState({
      password
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
          Hello World
          <Child onUpdatePassWord={this.onUpdatePassWord.bind(this)} onUpdateUserName={this.onUpdateUserName.bind(this)} username={this.state.username} password={this.state.password}/>
        </p>
      </div>
    );
  }
}

export default App;
