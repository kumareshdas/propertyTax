import React, { Component } from 'react';
import '../../styles/index.css';
import {Link} from 'react-router-dom';
class Sidebar extends Component {
  render() {

    return (
<div>
<div className="vertical-menu">
  <Link to="/">Home</Link>

  <Link to="/floortype">Floor Type</Link>
  <Link to="/walltype">Wall Type</Link>
  <Link to="/rooftype">Roof Type</Link>

  </div>


</div>
);
}
}

export default Sidebar;



// <a href="./contents/FloorType.js" onClick={this.FloorType}>Floor Type</a>
