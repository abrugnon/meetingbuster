import React, { Component } from 'react';
import logo from './conference.svg';
import './App.css';
import Menu from './Components/Menu';


class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      version: "",
      repository: ""
    };
  }
  componentWillMount() {
    fetch("/api/info")
        .then(res => res.json())
        .then(res => this.setState({
            //displaytimespent: this.ms2hms(res.time_spent),
            version: res.version,
          }))
        .catch(err => err);
  }
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

        <div width="40%">
          <div vertical-align="left" border="2px">
          Running Version : {this.state.version} <br/>
          LICENSE : CECILL V2 <br/>
          CREDITS : logo <a href="https://publicdomainvectors.org" target="_blank">https://publicdomainvectors.org</a><br/>
          Repository, bugs report &amp; ideas : <a href="https://github.com" target="_blank">http://github.com/abrugnon/meetingbuster</a> <br/>
          </div>
        </div>
        <div>
          <Menu />
        </div>
      </div>

    );
  }
}


export default Info;
