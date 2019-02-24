import React, {Component} from 'react'
import Navbar from '../../Components/Navbar'
import {Container, Row, Col, Form, Button, Alert} from 'react-bootstrap'
import './styles.css'
import PropTypes from 'prop-types';
class LoginComponent extends Component {

  state = {
    password: null,
    email: null,
  }

  onInputPassword = (event) => {
    const {value} = event.target
    this.setState({password: value})
  }

  onInputEmail = (event) => {
    const {value} = event.target
    this.setState({email: value})
  }

  onSubmit = () => {
    const {email, password} = this.state
    const available = email && password
    if(available) {
      this.setState({success: true})
    } else if(!available) {
      this.setState({error: true})
    }
  }

  goToPage = (page) => {
    const {history} = this.props
    history.push(page)
  }

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
              {this.state.error && (
                <Alert variant="danger" >
                  Error
                </Alert>
              )}
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username or Email</Form.Label>
                  <Form.Control onChange={this.onInputEmail} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control onChange={this.onInputPassword} type="password" placeholder="Password" />
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
                <Button onClick={this.onSubmit} className="btn-default-bg" size="lg" variant="primary">
                  Login
                </Button>
                </Col>
              </Row>
              </Form>
              </div>
              <div className="divider mt-20"/>
              <div className="mt-20" >
              <p className="small-text" >If you doesn't have a account please <Button onClick={() => this.goToPage('/register')} variant="link" className="checked no-padding"  >Register Here</Button></p> 
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