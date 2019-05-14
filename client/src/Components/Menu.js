import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Menu extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link> <Link to="/fullscreen">Fullscreen Display</Link> <Link to="/list">Mac List</Link>  <Link to="/New">New</Link>  <Link to="/info">Info</Link>
      </div>
    );
  }
}

export default Menu;
