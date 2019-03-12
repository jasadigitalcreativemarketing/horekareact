import React, {Component} from 'react'
import Navbar from '../../Components/Navbar'
import FooterComponent from '../../Components/Footer'
import {Container, Row, Col, Form, Button, Alert, Card} from 'react-bootstrap'
import './styles.scss'
import PropTypes from 'prop-types';
import {baseURL} from '../../Config'

class LoginComponent extends Component {

  state = {
    password: null,
    email: null,
    success: null,
    message:null
  }

  onInputPassword = (event) => {
    const {value} = event.target
    this.setState({password: value})
  }

  onInputEmail = (event) => {
    const {value} = event.target
    this.setState({email: value})
  }

  loginHandler = () => {
    const url = `${baseURL}/Horeka/rest/HorekaStoreService/userLogin`
    const headers = {
      "Content-Type": "application/json"
    }
    const body = {
      request: {
        username: this.state.email,
        password: this.state.password
      }
    }
    fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    }).then((data) => data.json()).then((res) => this.setupLogin(res)).catch((e) => console.log(e))
  }

  setupLogin = (res) => {
    if(res.response.errCode === 200) {
      this.setState({success: true, message: res.response.companyID })
      return
    }
    this.setState({success: false})
  }

  onSubmit = () => {
    const {email, password} = this.state
    const available = email && password
    if(available) {
      this.loginHandler()
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
    console.log("NANI", this.state)
    return (
      <div>
        <Navbar history={history} />
        <Container className="mt-4 login">
            <Card>
              <Card.Body>
              <div>
                <h4>Login</h4>
                <small>Lorem ipsum dolor, sit amet consectetur Ea aliquam, et quae ipsa. 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.</small>
              </div>
              <div className="mt-10" >
              {this.state.success === false && (
                <Alert variant="danger" >
                  Please check your username and password
                </Alert>
              )}
              {this.state.success && (
                 <Alert variant="success" >
                Login Success
               </Alert>
              )}
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username or Email</Form.Label>
                  <Form.Control onChange={this.onInputEmail} type="email" placeholder="" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control onChange={this.onInputPassword} type="password" placeholder="" />
                </Form.Group>
                <Row>
                  <Col className="remember-me" md={6} lg={6} >
                  <Form.Group controlId="formBasicChecbox">
                  <Form.Check type="checkbox" label="Remember Me" />
                  </Form.Group>
                  </Col>
                  <Col md={6} lg={6} className="text-right pr-0" >
                    <Button type="button" variant="link" >
                    Forget Password
                    </Button>
                  </Col>
                </Row>
              <Row className="center-text">
                <Col  >
                <Button onClick={this.onSubmit} className="btn-logreg mt-2 mb-3" size="lg" variant="primary">
                  Login
                </Button>
                </Col>
              </Row>
              </Form>
              <hr></hr>
              </div>
              <div className="mt-20" >
              <p>If you doesn't have a account, please <Button onClick={() => this.goToPage('/register')} variant="link" className="checked p-0 p-font m-0 va-unset">register here</Button></p>
              </div>
              </Card.Body>
              </Card>
        </Container>
        <FooterComponent history={history} />
      </div>
    )
  }
}

LoginComponent.propTypes = {
  history : PropTypes.object
}

export default LoginComponent