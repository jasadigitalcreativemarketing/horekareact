import React from 'react'
import {Navbar, Nav, NavDropdown, Button, ButtonGroup, Container, Form, FormControl} from 'react-bootstrap'
import PropTypes from 'prop-types';
import './styles.css'
import { faListAlt, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarComponent = ({history}) => {

  const goToPage = (page) => {
    history.push(page)
  }

  return (
    <Navbar expand="lg">
    <Container>
    <Navbar.Brand className="cursor-pointer" onClick={() => goToPage('/')}>HorekaStore</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Form inline className="mx-auto">
      <div className="input-group input-style">
                <div className="input-group-prepend">
                   <NavDropdown title="All" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </div>
                <FormControl type="text" placeholder="what are you looking for.." className="form-style"/>
                <div className="input-group-append">
                  <button onClick={() => goToPage('/searchresult')} className="btn btn-group-text btn-group-style bg-main text-white text-600" type="submit" id="button-addon2">SEARCH</button>
                </div>
              </div>
              </Form>
                <div className="navbar-nav mx-auto">
                <Nav.Link className="cursor-pointer mx-auto" onClick={() => goToPage('/dml')}><FontAwesomeIcon icon={faListAlt} /><span className="text-style text-600">DAILY MARKET LIST</span></Nav.Link>
                <Nav.Link className="nav-item nav-link mx-auto" href="#"><FontAwesomeIcon icon={faSearch} /></Nav.Link>
              <Nav.Link className="nav-item nav-link mx-auto" href="#"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
            </div>
      <ButtonGroup className="mx-auto">
        <Button className="btn-register text-center" onClick={() => goToPage('/register')} variant="">Register</Button>
        <Button variant="" className="btn-login text-center" onClick={() => goToPage('/login')}>Login</Button>
      </ButtonGroup>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

NavbarComponent.propTypes = {
  history: PropTypes.object.isRequired
}

export default NavbarComponent