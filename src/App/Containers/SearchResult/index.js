import React, { Component } from 'react';
import NavbarComponent from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Sidebar from '../../Components/Sidebar';
import {Navbar, Nav, NavDropdown, Row, Col, Card, Container, Form, FormControl, CardImg} from 'react-bootstrap'
import './style.scss'
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';

class SearchResult extends Component {
    goToPage = (page) => {
        const {history} = this.props
        history.push(page)
      }

    render() {
        const {history} = this.props
        return (
            <div>
                <NavbarComponent history={history} />
                <Container className="mt-3 mb-3">
                <Row>
                <Sidebar history={history} />
                <Col md={9} className="pl-1 mt-3 search-result">
                    <h6 className="mb-3">Showing 175 items for "carrot"(1-60 of 175)</h6>
                    <div className="d-flex">
                    <div className="mr-auto">
                        <h6>Sort: Low to high</h6>
                    </div>
                    <div className="ml-auto mr-10">
                        <div className="d-flex">
                        <label>
                        <input type="radio" name="radio" id="" checked/>
                        <div className="btn-radio">
                            Select
                        </div>
                        </label>
                        <label>
                        <input type="radio" name="radio" id=""/>
                        <div className="btn-radio">
                            Select All
                        </div>
                        </label>
                        </div>
                    </div>
                    </div>
                    <div className="shop-wrapper">
                    <Card className="shop-item">
                        <CardImg variant="top" src="img/wortel.jpg"/>
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
                        <CardImg variant="top" src="img/wortel.jpg"/>
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
                        <CardImg variant="top" src="img/wortel.jpg"/>
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
                        <CardImg variant="top" src="img/wortel.jpg"/>
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
                        <CardImg variant="top" src="img/wortel.jpg"/>
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
                        <CardImg variant="top" src="img/wortel.jpg"/>
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
                        <CardImg variant="top" src="img/wortel.jpg"/>
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
                        <CardImg variant="top" src="img/wortel.jpg"/>
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
                        <CardImg variant="top" src="img/wortel.jpg"/>
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
                        <CardImg variant="top" src="img/wortel.jpg"/>
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
                        <CardImg variant="top" src="img/wortel.jpg"/>
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
                        <CardImg variant="top" src="img/wortel.jpg"/>
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
                        <CardImg variant="top" src="img/wortel.jpg"/>
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
                        <CardImg variant="top" src="img/wortel.jpg"/>
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
                        <CardImg variant="top" src="img/wortel.jpg"/>
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

SearchResult.propTypes = {

};

export default SearchResult;