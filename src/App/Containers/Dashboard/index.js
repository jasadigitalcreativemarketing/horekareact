import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
// import { Transition } from 'react-transition-group';

import SideNav from './Components/SideNav';
import Navigation from './Components/Navigation';

import './style.scss';

class Dashboard extends Component {
  constructor() {
    super();
    this.sideMenuHandler = this.sideMenuHandler.bind(this);
  }

  state = {
    showSideMenu: true
  }

  sideMenuHandler(command) {
    if(command === 'open') this.setState({ showSideMenu: true});
    else this.setState({ showSideMenu: false});
  }

  render() {
    const { showSideMenu } = this.state;
    const { sideMenuHandler } = this;

    return(
      <div className="horeka-dash">
        <Row>
          <Col 
            md={3} 
            lg={3} 
            className={showSideMenu ? 'side-nav-cnt pr-0':'d-none'}
          >
            <SideNav actFunc={sideMenuHandler}/>
          </Col>

          <Col 
            md={ showSideMenu ? 9 : 12 } 
            lg={ showSideMenu ? 9 : 12 }
            className={showSideMenu ? 'pl-0':''}
          >
            <Navigation actFunc={sideMenuHandler} isSideNavOpen={showSideMenu}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
