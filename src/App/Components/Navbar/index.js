import React from 'react'
import {Navbar, Nav, NavDropdown, Button, ButtonGroup, Container} from 'react-bootstrap'
import PropTypes from 'prop-types';
import './styles.css'

const NavbarComponent = ({history}) => {

  const goToPage = (page) => {
    history.push(page)
  }

  return (
    <Navbar bg="light" expand="lg">
    <Container>
    <Navbar.Brand className="cursor" onClick={() => goToPage('/')} >Horeka</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav>
      <ButtonGroup>
        <Button variant="outline-primary" onClick={() => goToPage('/login')} >Login</Button>
        <Button className="btnText" onClick={() => goToPage('/register')} variant="outline-primary" >Register</Button>
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