import React, { Component } from 'react';
import Fullscreen from "react-full-screen";
//import logo from './conference.svg';
import './App.css';
import SumData from './Components/SumData';
import Menu from './Components/Menu';


class FullScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      isFull: false,
    };
  }
  goFull = () => {
    this.setState({ isFull: true });
  }
  goWindowed = () => {
    this.setState({ isFull: false });
  }
  render() {
    return (
      <div>
      <Fullscreen  enabled={this.state.isFull}  onChange={isFull => this.setState({isFull})} >
      <div className="App">
        <div className="results">
          <SumData />
        </div>
        <div className="bottom-menu">
          <Menu />
          <button onClick={this.goFull}>
            Go Fullscreen
          </button>
          <button onClick={this.goWindowed}>
            Quit Fullscreen mode
          </button>
        </div>
        </div>
         </Fullscreen>
      </div>

    );
  }
}


export default FullScreen;
