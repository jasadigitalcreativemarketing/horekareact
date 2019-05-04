import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Route,BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';

import SideNav from './Components/SideNav';
import Navigation from './Components/Navigation';
import SellerAccount from './Components/Seller/Account';
import SellerProduct from './Components/Seller/Product';
import SellerInventory from './Components/Seller/Inventory';
import SellerUser from './Components/Seller/User';
import ProductView from './Components/Seller/Product/View';

import './style.scss';

class Dashboard extends Component {
  constructor() {
    super();
    this.sideMenuHandler = this.sideMenuHandler.bind(this);
    this.routeHandler = this.routeHandler.bind(this);
  }

  state = {
    showSideMenu: true
  }

  componentDidMount() {
    this.forceUpdate();
  }

  sideMenuHandler(command) {
    if(command === 'open') this.setState({ showSideMenu: true});
    else this.setState({ showSideMenu: false});
  }

  routeHandler(path) {
    const { match, history } = this.props;
    history.push(`${match.url}/${path}`);
  }

  render() {
    const { showSideMenu } = this.state;
    const { sideMenuHandler, routeHandler } = this;
    const { match, location } = this.props;

    return(
      <div className="horeka-dash">
        <Row>
          <Col 
            md={3} 
            lg={3} 
            className={showSideMenu ? 'side-nav-cnt pr-0':'d-none'}
          >
            <SideNav 
              actFunc={sideMenuHandler} 
              routeHandler={routeHandler} 
              url={match.url} 
              location={location}/>
          </Col>

          <Col 
            md={ showSideMenu ? 9 : 12 } 
            lg={ showSideMenu ? 9 : 12 }
            className={showSideMenu ? 'pl-0':''}
          >
            <Navigation actFunc={sideMenuHandler} isSideNavOpen={showSideMenu}/>

            <Row className="main-dashboard p-4">
              <Col>
                <Route path={`${match.url}/seller/account`} component={SellerAccount} />
                <Route path={`${match.url}/seller/product`} exact component={SellerProduct} />
                <Route path={`${match.url}/seller/product/view/:id`} component={ProductView} />
                <Route path={`${match.url}/seller/inventory`} component={SellerInventory} />
                <Route path={`${match.url}/seller/user`} component={SellerUser}/>
                <Route
                  exact
                  path={match.path}
                  render={() => <h3>Horeka Dashboard</h3>}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

Dashboard.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
}

export default Dashboard;
