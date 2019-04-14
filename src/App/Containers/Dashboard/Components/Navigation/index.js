import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './style.scss';

class Navigation extends Component {
  render() {
    const { isSideNavOpen, actFunc } = this.props;
    return (
      <div className="horeka-nav">
        <Row className="justify-content-between align-items-center">
          <Col 
            lg={1} 
            className={isSideNavOpen ? 'd-none':'menu d-block'}
            onClick={() => actFunc('open')}
          >
            <FontAwesomeIcon icon={faBars} size="lg"/>
          </Col>

          <Col>Logo</Col>

          <Col className="text-right">
            <img className="right-image" src="img/user.png" />
          </Col>
        </Row>
      </div>
    );
  }
}

Navigation.propTypes = {
  actFunc: PropTypes.func,
  isSideNavOpen: PropTypes.bool,
}

export default Navigation;