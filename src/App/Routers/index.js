import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../Containers/Home'
import LoginComponent from '../Containers/Login';
import RegisterComponent from '../Containers/Register';

const MainRouter = () => (
  <Router>
    <div>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={LoginComponent} />
    <Route path="/register" component={RegisterComponent} />
    </div>
  </Router>
)

export default MainRouter