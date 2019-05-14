import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route}  from "react-router-dom"
//import createHistory from 'history/createBrowserHistory'
import { createBrowserHistory } from 'history'

import App from './App';
//import SumData from './Components/SumData';
import Mac from './Mac';
import New from './New';
import Info from './Info';
import FullScreen from './FullScreen';
import './index.css';


const history = new createBrowserHistory();

ReactDOM.render((
  <Router history={history}> ,
    <Route exact path="/" component={App}/>
    <Route path="/fullscreen" component={FullScreen}/>
    <Route path="/list" component={Mac}/>
    <Route path="/new" component={New}/>
    <Route path="/info" component={Info}/>
  </Router>),
  document.getElementById('root')
);
