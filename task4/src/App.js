import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  handleSubmit(e){
    e.preventDefault()
    
    this.props.history.push('/login');
  }
  render() {


    return (
      <div className="App">
          <form onSubmit={this.handleSubmit.bind(this)}>
              Username：<input type="text" />
            PassWord: <input type="password" />
          <input type="submit" value="submit" />
          </form>
      </div>
    );
  }
}

export default App;
