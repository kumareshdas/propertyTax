import React, { Component } from 'react';
import '../../styles/index.css';
class Header extends Component {
  render() {

    return (
<div>
      <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Property Tax</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
  </div>
</nav>
</div>
    );
    }
    }

    export default Header;
