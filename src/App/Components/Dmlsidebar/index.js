import React, { Component } from 'react';
import {Col, Card} from 'react-bootstrap'
import PropTypes from 'prop-types'
import './style.scss'

const DmlSidebarComponent = ({history}) => {
    

    const goToPage = (page) => {
      history.push(page)
    }
  
    return (
            <Col md={3} className="pr-1 dmlsidebar">
                <Card className="p-3 no-border">
                  <div className="d-flex">
                    <img src="img/user.png" height="55" width="55" ></img>
                    <span className="ml-3 mt-1">
                      <h5 className="mb-0 text-primary">Jambuluwuk</h5>
                      <p className="text-light">admin</p>
                    </span>
                    </div>
                </Card>
            </Col>
    )
  }
  
  DmlSidebarComponent.propTypes = {
    history: PropTypes.object.isRequired
  }
  
  export default DmlSidebarComponent


  