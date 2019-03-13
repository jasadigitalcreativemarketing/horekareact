import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../Containers/Home'
import LoginComponent from '../Containers/Login';
import RegisterComponent from '../Containers/Register';
import SearchResult from '../Containers/SearchResult';
import SearchResultRev from '../Containers/SearchResultRev';

const MainRouter = () => (
  <Router>
    <div>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={LoginComponent} />
    <Route path="/register" component={RegisterComponent} />
    <Route path="/searchresult" component={SearchResult} />
    <Route path="/searchresultrev" component={SearchResultRev} />
    </div>
  </Router>
)

export default MainRouter