import React ,{Component} from 'react'
import {Container} from 'react-bootstrap'
import PropTypes from 'prop-types';
import NavbarComponent from '../../Components/Navbar';
import {withRouter} from 'react-router-dom'


class RegisterComponent extends Component {
  render() {
    const {history} = this.props
    return (
      <div>
        <NavbarComponent history={history} />
        <Container>
          <p>Register nih</p>
        </Container>
      </div>
    )
  }
}

RegisterComponent.propTypes = {
  history: PropTypes.object
}

export default withRouter(RegisterComponent)