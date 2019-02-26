import React, { Component } from 'react';
import './App.scss';
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
