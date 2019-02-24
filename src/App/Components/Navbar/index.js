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
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
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