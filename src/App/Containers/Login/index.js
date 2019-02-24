import React, {Component} from 'react'
import Navbar from '../../Components/Navbar'
import {Container} from 'react-bootstrap'
import PropTypes from 'prop-types';
class LoginComponent extends Component {

  render() {
    const {history} = this.props
    return (
      <div>
        <Navbar history={history} />
        <Container>
          <p>INI LOGIN</p>
        </Container>
      </div>
    )
  }
}

LoginComponent.propTypes = {
  history : PropTypes.object
}

export default LoginComponent