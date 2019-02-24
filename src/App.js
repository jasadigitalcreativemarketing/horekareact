import React, { Component } from 'react';
import './App.css';
// import Home from './App/Containers/Home';
import Navbar from './App/Components/Navbar';
import 'react-bootstrap/dist/react-bootstrap.min';
import Router from './App/Routers'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router/>
      </React.Fragment>
    );
  }
}

export default App;
