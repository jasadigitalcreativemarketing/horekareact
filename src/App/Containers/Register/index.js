import React ,{Component} from 'react'
import {Container, Tabs, Tab, Card, Form, Col, Button} from 'react-bootstrap'
import PropTypes from 'prop-types';
import NavbarComponent from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import {withRouter} from 'react-router-dom'
import './styles.scss'
class RegisterComponent extends Component {
  render() {
    const {history} = this.props
    return (
      <div>
        <NavbarComponent history={history} />
        <Container className="register">
          <Card>
            <Card.Body>
              <h5>Register</h5>
              <small>Lorem ipsum is simply dummy text of the printing and typesetting industry.</small>
              <br></br>
              <small>Lorem ipsum has been the industry's standard dummy</small>
              <h6 className="mt-4 mb-3">You are register as</h6>
              <Tabs defaultActiveKey="buyer" transition={false} id="uncontrolled-tab-example">
              <Tab eventKey="buyer" title="Buyer">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>First name</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group>
                <Form.Row>
                  <Col>
                  <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="" />
                  </Col>
                  <Col>
                  <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Col>
                </Form.Row>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="" />
                </Form.Group>
                <h6 className="mt-4 mb-4">Please fill if register as company</h6>
                <Form.Group>
                <Form.Row>
                  <Col>
                  <Form.Label>Company name</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Col>
                  <Col>
                  <Form.Label>Position</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Col>
                </Form.Row>
                </Form.Group>
                <Form.Group>
                <Form.Row>
                  <Col>
                  <Form.Label>Company NPWP</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Col>
                  <Col>
                  <Form.Label>Company phone number</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Col>
                </Form.Row>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control as="textarea" rows="5" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Country</Form.Label>
                  <Form.Control as="select">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                <Form.Row>
                  <Col>
                  <Form.Label>Province</Form.Label>
                    <Form.Control as="select">
                    <option>Choose...</option>
                    <option>...</option>
                    </Form.Control>
                  </Col>
                  <Col>
                  <Form.Label>City</Form.Label>
                    <Form.Control as="select">
                    <option>Choose...</option>
                    <option>...</option>
                    </Form.Control>
                  </Col>
                </Form.Row>
                </Form.Group>
                <Form.Group>
                <Form.Row>
                  <Col>
                  <Form.Label>District</Form.Label>
                    <Form.Control as="select">
                    <option>Choose...</option>
                    <option>...</option>
                    </Form.Control>
                  </Col>
                  <Col>
                  <Form.Label>Zipcode</Form.Label>
                    <Form.Control as="select">
                    <option>Choose...</option>
                    <option>...</option>
                    </Form.Control>
                  </Col>
                </Form.Row>
                </Form.Group>
                <Button variant="primary" className="btn-logreg mt-5 mb-5" type="submit">
                  Register
                </Button>
              </Form>
              <hr></hr>
              <p>If you have a account, please <a>login here</a></p>
              </Tab>
              <Tab eventKey="seller" title="Seller">
              <p>Seller</p>
              </Tab>
            </Tabs>
            </Card.Body>
            </Card>
            </Container>
            <Footer history={history} />
      </div>
    )
  }
}

RegisterComponent.propTypes = {
  history: PropTypes.object
}

export default withRouter(RegisterComponent)