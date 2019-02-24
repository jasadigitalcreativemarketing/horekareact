import React, { Component } from 'react';
import './App.css';
import Home from './App/Containers/Home';
import Navbar from './App/Components/Navbar';
import 'react-bootstrap/dist/react-bootstrap.min';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Home />
      </React.Fragment>
    );
  }
}

export default App;
