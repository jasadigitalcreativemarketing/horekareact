import React ,{Component} from 'react'
import {Container, Tabs, Tab, Card, Form, Col, Button} from 'react-bootstrap'
import PropTypes from 'prop-types';
import NavbarComponent from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import {withRouter} from 'react-router-dom'
import './styles.scss'
import {baseURL} from '../../Config'
import {connect} from 'react-redux'
import { isErrorApp } from '../../Redux/Actions';

class RegisterComponent extends Component {

  state = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    compName: null,
    position: null,
    NPWP: null,
    phoneCompany: null,
    address: null,
    countryList: [],
    countryCode: null,
    provinceList: [],
    provinceCode: null,
    islandCode:null,
    cityList: [],
    cityNo:null,
    regionNo: null,
    postalCodeList: []
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.countryCode !== this.state.countryCode && this.state.countryCode) {
      this.fetchProvince()
    }
    if(prevState.provinceCode !== this.state.provinceCode && this.state.provinceCode) {
      this.fetchCity()
    }
    if(prevState.cityNo !== this.state.cityNo && this.state.cityNo) {
      this.fetchZipCode()
    }
  }

  inputFirstName = (event) => {
    const {value} = event.target
    this.setState({firstName: value})
  }
  inputLastName = (event) => {
    const {value} = event.target
    this.setState({lastName: value})
  }
  inputEmail = (event) => {
    const {value} = event.target
    this.setState({email: value})
  }
  inputPhone = (event) => {
    const {value} = event.target
    this.setState({phone: value})
  }
  inputPass = (event) => {
    const {value} = event.target
    this.setState({password: value})
  }
  inputComp = (event) => {
    const {value} = event.target
    this.setState({compName: value})
  }
  inputPosition = (event) => {
    const {value} = event.target
    this.setState({position: value})
  }
  inputNPWP = (event) => {
    const {value} = event.target
    this.setState({NPWP: value})
  }
  inputPhoneCompany = (event) => {
    const {value} = event.target
    this.setState({phoneCompany: value})
  }
  inputAddress = (event) => {
    const {value} = event.target
    this.setState({address: value})
  }

  componentDidMount = () => {
    this.fetchListCountry()
  }

  fetchListCountry = () => {
    const url = `${baseURL}/Horeka/rest/HorekaStoreService/getCountry`
    const headers = {
      "Content-Type": "application/json"
    }
    fetch(url, {
      headers,
      method: 'post'
    }).then((res) => res.json()).then(res => this.setupListCountry(res)).catch((e) => this.props.setError(true))
  }

  setupListCountry = (res) => {
    this.setState({countryList: res.response.countryList["country-list"]})
  }

  selectCountryHandler = (event) => {
    const {value} = event.target
    this.setState({countryCode: value})
    
  }

  fetchProvince = () => {
    const url = `${baseURL}/Horeka/rest/HorekaStoreService/getProvince`
    const {countryCode} = this.state
    const headers = {
      "Content-Type": "application/json"
    }
    const body = {
      request: {
        countryCode
      }
    }
    fetch(url, {
      headers,
      method: 'post',
      body: JSON.stringify(body)
    }).then((res) => res.json()).then(res => this.setupProvince(res)).catch((e) => this.props.setError(true) )
  }

  setupProvince = (res) => {
    this.setState({provinceList: res.response.tRegion["t-region"]})
  }
  
  selectProvinceHandler = (event) => {
    const {value} = event.target
    const a = value.indexOf(",")
    const b = value.slice(a + 1)
    const c = value.slice(0, a)
    this.setState({provinceCode: c, islandCode: b})
  }

  fetchCity = () => {
    const url = `${baseURL}/Horeka/rest/HorekaStoreService/getCity
    `
    const {countryCode, islandCode, provinceCode} = this.state
    const headers = {
      "Content-Type": "application/json"
    }
    const body = {
      request: {
        countryCode,
        islandNo: islandCode,
        provinceNo: provinceCode,
      }
    }
    fetch(url, {
      headers,
      method: 'post',
      body: JSON.stringify(body)
    }).then((res) => res.json()).then(res => this.setupCity(res)).catch((e) => this.props.setError(true))
  }

  setupCity = (res) => {
    this.setState({cityList: res.response.tCity["t-city"]})
  }

  selectCityHandler = (event) => {
    const {value} = event.target
    const a = value.indexOf(",")
    const b = value.slice(a + 1)
    const c = value.slice(0, a)
    this.setState({cityNo: c, regionNo: b})
  }

  fetchZipCode = () => {
    const url = `${baseURL}/Horeka/rest/HorekaStoreService/getZipCode
    `
    const {cityNo, regionNo} = this.state
    const headers = {
      "Content-Type": "application/json"
    }
    const body = {
      request: {
        cityNo,
        regionNumber: regionNo
      }
    }
    fetch(url, {
      headers,
      method: 'post',
      body: JSON.stringify(body)
    }).then((res) => res.json()).then(res => this.setupPostalCode(res)).catch((e) => this.props.setError(true))
  }

  setupPostalCode = (res) => {
    this.setState({postalCodeList: res.response.zipcodeList["zipcode-list"]})
  }


  render() {
    const {history} = this.props
    const {countryList, provinceList, cityList, postalCodeList} = this.state
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
                  <Form.Control onChange={this.inputFirstName} type="text" placeholder="" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control onChange={this.inputLastName} type="text" placeholder="" />
                </Form.Group>
                <Form.Group>
                <Form.Row>
                  <Col>
                  <Form.Label>Email</Form.Label>
                    <Form.Control onChange={this.inputEmail} type="email" placeholder="" />
                  </Col>
                  <Col>
                  <Form.Label>Phone number</Form.Label>
                    <Form.Control onChange={this.inputPhone} type="text" placeholder="" />
                  </Col>
                </Form.Row>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control onChange={this.inputPass} type="password" placeholder="" />
                </Form.Group>
                <h6 className="mt-4 mb-4">Please fill if register as company</h6>
                <Form.Group>
                <Form.Row>
                  <Col>
                  <Form.Label>Company name</Form.Label>
                    <Form.Control onChange={this.inputComp} type="text" placeholder="" />
                  </Col>
                  <Col>
                  <Form.Label>Position</Form.Label>
                    <Form.Control onChange={this.inputPosition} type="text" placeholder="" />
                  </Col>
                </Form.Row>
                </Form.Group>
                <Form.Group>
                <Form.Row>
                  <Col>
                  <Form.Label>Company NPWP</Form.Label>
                    <Form.Control onChange={this.inputNPWP} type="text" placeholder="" />
                  </Col>
                  <Col>
                  <Form.Label>Company phone number</Form.Label>
                    <Form.Control onChange={this.inputPhoneCompany} type="text" placeholder="" />
                  </Col>
                </Form.Row>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control onChange={this.inputAddress} as="textarea" rows="5" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Country</Form.Label>
                  <Form.Control onChange={this.selectCountryHandler} as="select">  
                    <option>Choose...</option>
                    {countryList.map((x, index) => (
                      <option value={x["country-code"]}  key={index} > {x["country-name"]} </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                <Form.Row>
                  <Col>
                  <Form.Label>Province</Form.Label>
                    <Form.Control onChange={this.selectProvinceHandler} as="select">
                    <option>Choose...</option>
                    {provinceList.map((x, index) => (
                       <option value={[x["region-number"], x["island-number"]]} key={index} > {x["region-name"]} </option>
                    ))}
                    </Form.Control>
                  </Col>
                  <Col>
                  <Form.Label>City</Form.Label>
                    <Form.Control onChange={this.selectCityHandler} as="select">
                    <option>Choose...</option>
                    {cityList.map((x, index) => (
                      <option value={[x.cityNo, x.regionNo]} key={index} > {x.cityName} </option>
                    ))}
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
                    {postalCodeList.map((x, index) => (
                      <option value={x["postal-code"]} key={index} > {x["postal-code"]} </option>
                    ))}
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

const mapStateToProps = (state) => ({
  error: state.main && state.main.error
})

const mapDispatchToProps = (dispatch) => ({
  setError: (status) => dispatch(isErrorApp(status))
})

RegisterComponent.propTypes = {
  history: PropTypes.object,
  setError: PropTypes.func,
  error: PropTypes.bool,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterComponent))