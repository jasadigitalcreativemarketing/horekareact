import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import NavbarComponent from '../../Components/Navbar';
import FooterComponent from '../../Components/Footer';
import { Container, Jumbotron, Row, Col, Carousel, CarouselItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './styles.scss'
import { faListAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


class Home extends Component {

  state = {
    list: []
  }

  render() {
    const {history} = this.props
    return (
      <div>
        <NavbarComponent history={history} />
          <Jumbotron fluid>
          <Container>
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
                <Carousel>
                    <CarouselItem>
                    <img className="d-block curousel-box" src="img/slide1.jpg" alt="First slide"/>
                    </CarouselItem>
                  <CarouselItem>
                    <img className="d-block curousel-box" src="img/slide2.jpg" alt="Second slide" />
                  </CarouselItem>
                  <CarouselItem>
                    <img className="d-block curousel-box" src="img/slide3.jpg" alt="Third slide" />
                  </CarouselItem>
               </Carousel>
              </Col>
            </Row>
            </Container>
        </Jumbotron>
                <section className="bg-light" id="request-box">
          <div className="container">
            <div className="row no-gutters white-box-2">
              <div className="col-6"> 
                <img src="img/request-img.jpeg" className="img-fluid request-image" alt="Responsive image" />
              </div>
              <div className="col-6">
                <div className="container mt-5">
                  <h2 className="text-second">One Request, Multiple qoutes</h2>
                  <div className="row">
                    <div className="col-7 pr-1">
                      <div className="form-group request-input-style">
                        <input type="text" className="form-control request-form-style" id aria-describedby placeholder="all category" />
                      </div>
                    </div>
                    <div className="col-5 pl-1">
                      <button type="submit" className="btn request-btn-style bg-main text-white">REQUEST ORDER</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light" id="popular-tab">
          <div className="container">
            <div className="row pl-2 pr-2">
              <div className="col">
                <h4>Popular</h4>
              </div>
              <div className="col">
                <label>
                  <input type="radio" name="radio" id=""/>
                  <div className="btn-radio">
                    Food
                  </div>
                </label>
              </div>
              <div className="col">
                  <label>
                    <input type="radio" name="radio" id=""/>
                    <div className="btn-radio">
                      Spice
                  </div>
                  </label>
                </div>
              <div className="col">
                <label>
                  <input type="radio" name="radio" id="" />
                  <div className="btn-radio">
                    Kitchen Set
                  </div>
                </label>
              </div>
              <div className="col">
                <label>
                  <input type="radio" name="radio" id="" />
                  <div className="btn-radio">
                    Furniture
                  </div>
                </label>
              </div>
              <div className="col">
                <label>
                  <input type="radio" name="radio" id="" />
                  <div className="btn-radio">
                    Electronic
                  </div>
                </label>
              </div>
              <div className="col">
                <label>
                  <input type="radio" name="radio" id="" />
                  <div className="btn-radio">
                    Health
                  </div>
                </label>
              </div>
              <div className="col">
                <label>
                  <input type="radio" name="radio" id="" />
                  <div className="btn-radio">
                    Cleaning
                  </div>
                </label>
              </div>
              <div className="col">
                <label>
                  <input type="radio" name="radio" id="" />
                  <div className="btn-radio">
                    Stationery
                  </div>
                </label>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light" id="popular-item">
          <div className="container pt-2">
           <OwlCarousel className="owl-theme popular-product" loop={true} margin={10} items={5} nav dots={false}>
                <div className="item">
                  <div className="card card-box">
                    <div className="card-body">
                      <img className="card-img-top" src="img/indomie1.png" alt="Card image cap" />
                      <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                      <p className="card-text text-center card-price">Rp 2.300</p>
                      <p className="card-text text-center card-shop-name">Abc 1234 Shop</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="card card-box">
                    <div className="card-body">
                      <img className="card-img-top" src="img/indomie2.png" alt="Card image cap" />
                      <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                      <p className="card-text text-center card-price">Rp 2.300</p>
                      <p className="card-text text-center card-shop-name">Abc 1234 Shop</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="card card-box">
                    <div className="card-body">
                      <img className="card-img-top" src="img/indomie3.png" alt="Card image cap" />
                      <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                      <p className="card-text text-center card-price">Rp 2.300</p>
                      <p className="card-text text-center card-shop-name">Abc 1234 Shop</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="card card-box">
                    <div className="card-body">
                      <img className="card-img-top" src="img/indomie4.png" alt="Card image cap" />
                      <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                      <p className="card-text text-center card-price">Rp 2.300</p>
                      <p className="card-text text-center card-shop-name">Abc 1234 Shop</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="card card-box">
                    <div className="card-body">
                      <img className="card-img-top" src="img/indomie5.jpg" alt="Card image cap" />
                      <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                      <p className="card-text text-center card-price">Rp 2.300</p>
                      <p className="card-text text-center card-shop-name">Abc 1234 Shop</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="card card-box">
                    <div className="card-body">
                      <img className="card-img-top" src="img/indomie3.png" alt="Card image cap" />
                      <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                      <p className="card-text text-center card-price">Rp 2.300</p>
                      <p className="card-text text-center card-shop-name">Abc 1234 Shop</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="card card-box">
                    <div className="card-body">
                      <img className="card-img-top" src="img/indomie2.png" alt="Card image cap" />
                      <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                      <p className="card-text text-center card-price">Rp 2.300</p>
                      <p className="card-text text-center card-shop-name">Abc 1234 Shop</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="card card-box">
                    <div className="card-body">
                      <img className="card-img-top" src="img/indomie4.png" alt="Card image cap" />
                      <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                      <p className="card-text text-center card-price">Rp 2.300</p>
                      <p className="card-text text-center card-shop-name">Abc 1234 Shop</p>
                    </div>
                  </div>
                </div>
            </OwlCarousel >
          </div>
        </section>
                <section className="bg-light" id="recomended-item">
          <div className="container pt-2">
            <div className="row no-gutters card-deck">
              <div className="col-3">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="img/indomie4.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center">
                      <button type="submit" className="btn btn-buy">BUY</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="img/indomie1.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center">
                      <button type="submit" className="btn btn-buy">BUY</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="img/indomie3.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center">
                      <button type="submit" className="btn btn-buy">BUY</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="img/indomie2.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center">
                      <button type="submit" className="btn btn-buy">BUY</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="img/indomie1.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center">
                      <button type="submit" className="btn btn-buy">BUY</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="img/indomie3.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center">
                      <button type="submit" className="btn btn-buy">BUY</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="img/indomie4.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center">
                      <button type="submit" className="btn btn-buy">BUY</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card card-box">
                  <div className="card-body">
                    <img className="card-img-top" src="img/indomie2.png" alt="Card image cap" />
                    <h6 className="card-subtitle text-center card-text-style">Indomie Rasa Soto</h6>
                    <p className="card-text text-center card-price">Rp 2.300</p>
                    <div className="text-center">
                      <button type="submit" className="btn btn-buy">BUY</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light" id="partner">
          <div className="container pt-2 pb-2">
            <div className="row no-gutters ">
              <div className="col">
                <h2>Our Partner</h2>
              </div>
            </div>
          </div>
        </section>
        {/* End Recomended */}
        {/* Start Partners */}
        <section className="bg-light" id="partner-box">
          <div className="container pt-2 pb-2">
            <div className="row no-gutter">
              <div className="col-2 pr-1 pl-1"><img src="img/samsung.png" alt="samsung" className="img-box no-border-left" /></div>
              <div className="col-2 pr-1 pl-1"><img src="img/samsung.png" alt="samsung" className="img-box" /></div>
              <div className="col-2 pr-1 pl-1"><img src="img/samsung.png" alt="samsung" className="img-box" /></div>
              <div className="col-2 pr-1 pl-1"><img src="img/samsung.png" alt="samsung" className="img-box" /></div>
              <div className="col-2 pr-1 pl-1"><img src="img/samsung.png" alt="samsung" className="img-box" /></div>
              <div className="col-2 pr-1 pl-1"><img src="img/samsung.png" alt="samsung" className="img-box" /></div>
            </div>
          </div>
        </section>
        <FooterComponent history={history} />
      </div>
    )
  }
}

Home.propTypes = {
  history: PropTypes.object
}

export default withRouter(Home)