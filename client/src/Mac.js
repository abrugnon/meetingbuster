import React, { Component } from 'react';
import logo from './conference.svg';
import './App.css';
import Menu from './Components/Menu';
import PhoneList from './Components/PhoneList';

class Mac extends Component {
  render() {

    return (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Meeting Buster</h2>
        </div>
        <p className="App-intro">
          Under heavy work here <code>src/App.js</code>
        </p>

        <div className="results">
          <PhoneList />
        </div>
        <div>
          <Menu />
        </div>
      </div>

    );
  }
}


export default Mac;
