import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Components
import App from './App';
import Posts from './components/Post'
import { BrowserRouter, Route } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
<BrowserRouter>
  <div>
    <Route exact path="/" component={App}></Route>
    <Route exact path="/login" component={Posts}></Route>
  </div>

</BrowserRouter>
  ,

document.getElementById('root'));
registerServiceWorker();
