import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Row, Col, Card, Container, Form, FormControl, InputGroup} from 'react-bootstrap'
import PropTypes from 'prop-types'
import './style.scss'

const SidebarComponent = ({history}) => {
    

    const goToPage = (page) => {
      history.push(page)
    }
  
    return (
            <Col md={3} className="pr-1 sidebar">
                <Card className="p-2">
                    <h5>Category</h5>
                    <Card.Body className="mt-0">
                        <Form>
                        <Form.Group controlId="formBasicEmail" className="no-margin">
                            <Form.Control type="text" placeholder="search" />
                        </Form.Group>
                        </Form>
                        <NavDropdown title="Agriculture & food" id="basic-nav-dropdown" className="mt-2">
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                    </Card.Body>
                    <h5>Max budget</h5>
                    <Form.Group>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type="text"
                                placeholder="0"
                                />
                        </InputGroup>
                    </Form.Group>
                    <h5>Min budget</h5>
                    <Form.Group>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type="text"
                                placeholder="0"
                                />
                        </InputGroup>
                    </Form.Group>
                </Card>
            </Col>
    )
  }
  
  SidebarComponent.propTypes = {
    history: PropTypes.object.isRequired
  }
  
  export default SidebarComponent