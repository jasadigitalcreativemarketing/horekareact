import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { faStore, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { Close } from '@material-ui/icons';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import './style.scss';

class SideNav extends Component {
  constructor() {
    super();
    this.handleMenu = this.handleMenu.bind(this);
  }

  state = {
    activePath: '',
  }

  handleMenu(path) {
    const { routeHandler, url } = this.props;
    this.setState({activePath:`${url}/${path}`});

    routeHandler(path);
  }

  componentWillMount() {
    const { location } = this.props;
    this.setState({activePath: location.pathname})
  }

  render() {
    const { actFunc, url, history } = this.props;
    const { handleMenu } = this;
    const { activePath } = this.state;
    return (
      <div className="horeka-side-nav">
        <Container>
          <Row className="nav-top align-items-center">
            <Col lg={2} className="close" onClick={() => actFunc('close')}>
              <Close />
            </Col>
            <Col lg={10} className="name">
              <h4>NAVIGATION</h4>
            </Col>
          </Row>

          <Row className="role align-items-center">
            <Col lg={2}>
              <img src="/img/user.png" />
            </Col>
            <Col lg={10} className="text-main">
              <h5>ADMIN</h5>
            </Col>
          </Row>

          <Row className="manage">
            <Col className="pl-0 pr-0">
            <Accordion allowMultipleExpanded allowZeroExpanded>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <FontAwesomeIcon icon={faStore} size="lg"/> Manage Seller
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ul className="menu">
                    <li 
                      className={activePath === `${url}/seller/account` ? 'menu-item d-flex active' : 'menu-item d-flex'} 
                      onClick={() => handleMenu('seller/account')}
                    >
                      <p className="number">1</p>
                      <p>Seller Account</p>
                    </li>

                    <li 
                      className={activePath === `${url}/seller/user` ? 'menu-item d-flex active' : 'menu-item d-flex'} 
                      onClick={() => handleMenu('seller/user')}
                    >
                      <p className="number">2</p>
                      <p>User Account</p>
                    </li>

                    <li 
                      className={activePath === `${url}/seller/product` ? 'menu-item d-flex active' : 'menu-item d-flex'} 
                      onClick={() => handleMenu('seller/product')}
                    >
                      <p className="number">3</p>
                      <p>Product Seller</p>
                    </li>

                    <li 
                      className={activePath === `${url}/seller/inventory` ? 'menu-item d-flex active' : 'menu-item d-flex'} 
                      onClick={() => handleMenu('seller/inventory')}
                    >
                      <p className="number">4</p>
                      <p>Inventory Seller</p>
                    </li>
                  </ul>
                </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                      <FontAwesomeIcon icon={faShoppingCart} size="lg"/>  Manage Buyer
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                  <ul className="menu">
                    <li
                      className={activePath === `${url}/buyer/user` ? 'menu-item d-flex active' : 'menu-item d-flex'}
                      onClick={() => handleMenu('buyer/user')}
                    >
                      <p className="number">1</p>
                      <p>User Account</p>
                    </li>

                    <li 
                      className={activePath === `${url}/buyer/ranks` ? 'menu-item d-flex active' : 'menu-item d-flex'}
                      onClick={() => handleMenu('buyer/ranks')}
                    >
                      <p className="number">2</p>
                      <p>Ranks</p>
                    </li>

                    <li 
                      className={activePath === `${url}/buyer/setting` ? 'menu-item d-flex active' : 'menu-item d-flex'}
                      onClick={() => handleMenu('buyer/setting')}
                    >
                      <p className="number">3</p>
                      <p>General Setting</p>
                    </li>
                  </ul>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

SideNav.propTypes = {
  actFunc: PropTypes.func,
  routeHandler: PropTypes.func,
  url: PropTypes.string,
  location: PropTypes.object,
}

export default SideNav;