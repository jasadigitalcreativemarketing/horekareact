import React, {Component} from 'react'
import Navbar from '../../Components/Navbar'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import './styles.css'
import PropTypes from 'prop-types';
class LoginComponent extends Component {

  render() {
    const {history} = this.props
    return (
      <div>
        <Navbar history={history} />
        <Container>
          <Row className="justify-content-md-center" >
            <Col className="box" md={6} lg={6} sm={12} >
              <div>
                <h4>Login</h4>
                <p>Lorem ipsum dolor, sit amet consectetur Ea aliquam, et quae ipsa. 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="mt-10" >
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username or Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Row>
                  <Col className="remember-me" md={6} lg={6} >
                  <Form.Group controlId="formBasicChecbox">
                  <Form.Check type="checkbox" label="Remember Me" />
                  </Form.Group>
                  </Col>
                  <Col md={6} lg={6} className="right-text" >
                    <Button type="button" variant="link" >
                    Forget Password
                    </Button>
                  </Col>
                </Row>
              <Row className="center-text">
                <Col  >
                <Button className="btn-default-bg" size="lg" variant="primary" type="submit">
                  Login
                </Button>
                </Col>
              </Row>
              </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

LoginComponent.propTypes = {
  history : PropTypes.object
}

export default LoginComponent