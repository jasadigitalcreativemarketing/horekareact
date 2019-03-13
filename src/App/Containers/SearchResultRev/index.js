import React, { Component } from 'react';
import NavbarComponent from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import {Row, Col, Carousel, CarouselItem, Card, Container, CardImg, Badge, Button} from 'react-bootstrap'
import './style.scss'
import { faMapMarker, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';


class SearchResultRev extends Component {

    goToPage = (page) => {
        const {history} = this.props
        history.push(page)
      }

    render() {
        const {history} = this.props
        return (
            <div>
                <NavbarComponent history={history} />
                <Container className="mt-5">
                <a href="/searchresult"><p><FontAwesomeIcon icon={faChevronLeft} /> <span className="text-dark-light ml-2">BACK</span></p></a>
                    <Row className="mb-5">
                        <Col md={6}>
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
                        <Col md={6}>
                            <h4><span className="text-bold">Wortel Segar</span><small className="float-right"><Badge variant="light">Minimal order: 20kg</Badge></small></h4>
                            <p className="mb-0 text-italic text-light">start from</p>
                            <h5><span className="text-primary">Rp. 2.100</span><small className="text-light">/ons</small></h5>
                            <p className="text-bold">CV Prima</p>
                            <p><FontAwesomeIcon icon={faMapMarker} /> <span className="text-light">Jl. Bukit Gading Raya, Perkantoran Gading Bukit Indah blok O No. 3-5, Kota Jakarta Utara, Daerah Khusus Ibukota Jakarta 14240</span></p>
                            <h6 className="text-bold mt-5">Item Details</h6>
                            <p className="text-dark-light">Easy to grow & 90% germination rate. Emergence of seadlings about 8-10 days. Sprout temperature about 18-20C. Planting in backyards, front yards raised beds or planter boxes. Easy to grow & 90% germination rate.</p>
                            <Button className="mt-4" variant="info">Add Item</Button>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col md={12}>
                        <h4>Items Similar</h4>
                    <div className="shop-wrapper">
                    <Card className="shop-item">
                    <div className="img-product">
                        <CardImg variant="top" src="img/wortel.jpg"/>
                        <div className="img-overlay"></div>
                        <Button className="btn-info-img" size="sm">view</Button>
                    </div>
                        <Card.Body>
                            <Card.Title>Wortel</Card.Title>
                            <Card.Text>
                                <small>Start from</small>
                                <h6>Rp. 2.000</h6>
                                <small className="company">CV Citra Abadi</small>
                                <p><FontAwesomeIcon icon={faMapMarker} /> Jakarta</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="shop-item">
                    <div className="img-product">
                        <CardImg variant="top" src="img/wortel.jpg"/>
                        <div className="img-overlay"></div>
                        <Button className="btn-info-img" size="sm">view</Button>
                    </div>
                        <Card.Body>
                            <Card.Title>Wortel</Card.Title>
                            <Card.Text>
                                <small>Start from</small>
                                <h6>Rp. 2.000</h6>
                                <small className="company">CV Citra Abadi</small>
                                <p><FontAwesomeIcon icon={faMapMarker} /> Jakarta</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="shop-item">
                    <div className="img-product">
                        <CardImg variant="top" src="img/wortel.jpg"/>
                        <div className="img-overlay"></div>
                        <Button className="btn-info-img" size="sm">view</Button>
                    </div>
                        <Card.Body>
                            <Card.Title>Wortel</Card.Title>
                            <Card.Text>
                                <small>Start from</small>
                                <h6>Rp. 2.000</h6>
                                <small className="company">CV Citra Abadi</small>
                                <p><FontAwesomeIcon icon={faMapMarker} /> Jakarta</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="shop-item">
                    <div className="img-product">
                        <CardImg variant="top" src="img/wortel.jpg"/>
                        <div className="img-overlay"></div>
                        <Button className="btn-info-img" size="sm">view</Button>
                    </div>
                        <Card.Body>
                            <Card.Title>Wortel</Card.Title>
                            <Card.Text>
                                <small>Start from</small>
                                <h6>Rp. 2.000</h6>
                                <small className="company">CV Citra Abadi</small>
                                <p><FontAwesomeIcon icon={faMapMarker} /> Jakarta</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="shop-item">
                    <div className="img-product">
                        <CardImg variant="top" src="img/wortel.jpg"/>
                        <div className="img-overlay"></div>
                        <Button className="btn-info-img" size="sm">view</Button>
                    </div>
                        <Card.Body>
                            <Card.Title>Wortel</Card.Title>
                            <Card.Text>
                                <small>Start from</small>
                                <h6>Rp. 2.000</h6>
                                <small className="company">CV Citra Abadi</small>
                                <p><FontAwesomeIcon icon={faMapMarker} /> Jakarta</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="shop-item">
                    <div className="img-product">
                        <CardImg variant="top" src="img/wortel.jpg"/>
                        <div className="img-overlay"></div>
                        <Button className="btn-info-img" size="sm">view</Button>
                    </div>
                        <Card.Body>
                            <Card.Title>Wortel</Card.Title>
                            <Card.Text>
                                <small>Start from</small>
                                <h6>Rp. 2.000</h6>
                                <small className="company">CV Citra Abadi</small>
                                <p><FontAwesomeIcon icon={faMapMarker} /> Jakarta</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                        </Col>
                    </Row>
                    
                </Container>
                <Footer history={history} />
            </div>
        );
    }
}

export default SearchResultRev;