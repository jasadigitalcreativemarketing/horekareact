import React, {Component} from 'react';
import {baseURL} from '../../Config'
import {withRouter} from 'react-router-dom'
import NavbarComponent from '../../Components/Navbar';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

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
    console.log(res, "response")
  }

  render() {
    const {history} = this.props
    return (
      <div>
        <NavbarComponent history={history} />
        <Container>
          <p>HALA</p>
        </Container>
      </div>
    )
  }
}

Home.propTypes = {
  history: PropTypes.object
}

export default withRouter(Home)