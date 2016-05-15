//=================
// Import the dependencies that this component will need
// to function properly
//=================
import React, { Component } from "react";
import { Link } from 'react-router';

//=================
// This will be a navigation bar
//=================
export default class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="dashboard">Dashboard</Link></li>
          <li><Link to="login">Login</Link></li>
        </ul>
      </div>
    );
  }
}
