import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Post from './Post'
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Link,
  Route,
  withRouter,
  Redirect,
  Switch
} from 'react-router-dom'



ReactDOM.render(<Router>

                  <div>

                      <Route exact path="/" component={App}/>
                      <Route exact path="/login" component={Post}/>
                  </div>
            
                </Router>
  , document.getElementById('root'));
registerServiceWorker();
