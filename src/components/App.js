import React, { Component } from 'react';
import '../styles/App.css';
import Header from './common/Header';
import FloorType from './contents/FloorType';
import Sidebar from './common/Sidebar';
import 'bootstrap/less/bootstrap.less';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="full-size">

          <Header/>,
          <Sidebar/>,
                {this.props.children}
      </div>
      </div>
    );
  }
}

export default App;
