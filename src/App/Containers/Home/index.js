import React, {Component} from 'react';
import {baseURL} from '../../Config'
import {withRouter} from 'react-router-dom'
import NavbarComponent from '../../Components/Navbar';
import { Container, Jumbotron, Row, Col, NavDropdown, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './styles.css'
import { faListAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Home extends Component {

  state = {
    list: []
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
    }).then((res) => res.json()).then(res => this.setupListCountry(res)).catch((e) => console.log(e))
  }

  setupListCountry = (res) => {
    console.log(res.response.countryList["country-list"] , "response")
  }

  render() {
    const {history} = this.props
    return (
      <div>
        <NavbarComponent history={history} />
        <Container>
          <Jumbotron fluid>
            <Row className="white-box">
              <Col sm={3} className="pl-0 pr-0">
                <div>
                  <h4 className="jumbo-head-style text-600 pl-3">Category</h4>
                </div>
                <div className="input-group jumbo-input-style mb-3">
                  <input type="search" className="form-control form-style" placeholder="search here" aria-label aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <button className="btn btn-group-text bg-main text-white" type="button"><FontAwesomeIcon icon={faSearch} /></button>
                  </div>
                </div>
                <div className="dropright">
                  <button type="button" className="btn btn-dropdown text-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <FontAwesomeIcon icon={faListAlt} /> Agriculture & Food
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Cosmetic</a>
                    <a className="dropdown-item" href="#">Fashion</a>
                    <a className="dropdown-item" href="#">Jewelry</a>
                  </div>
                </div>
                <div className="dropright">
                  <button type="button" className="btn btn-dropdown text-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <FontAwesomeIcon icon={faListAlt} /> Automotive
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
                <div className="dropright">
                  <button type="button" className="btn btn-dropdown text-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <FontAwesomeIcon icon={faListAlt} /> Beauty & Fashion
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
                <div className="dropright">
                  <button type="button" className="btn btn-dropdown text-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <FontAwesomeIcon icon={faListAlt} /> Computer
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
                <div className="dropright">
                  <button type="button" className="btn btn-dropdown text-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <FontAwesomeIcon icon={faListAlt} /> Electronics
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
                <div className="dropright">
                  <button type="button" className="btn btn-dropdown text-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <FontAwesomeIcon icon={faListAlt} /> Furnitures
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
                <div className="dropright">
                  <button type="button" className="btn btn-dropdown text-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <FontAwesomeIcon icon={faListAlt} /> Healths
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
                <div className="dropright">
                  <button type="button" className="btn btn-dropdown text-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <FontAwesomeIcon icon={faListAlt} /> Horeca
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
                {/* <Nav className="dropright">
                  <button type="button" className="btn btn-dropdown text-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <FontAwesomeIcon icon={faListAlt} /> Offices
                  </button>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav> */}
              </Col>
              <Col sm={9} className="p-0">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block curousel-box" src="./asset/img/railway-station.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block curousel-box" src="./asset/img/train-station.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block curousel-box" src="./asset/img/departure-platform.jpg" alt="Third slide" />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
        </Jumbotron>
        </Container>
      </div>
    )
  }
}

Home.propTypes = {
  history: PropTypes.object
}

export default withRouter(Home)