import React, {Component} from 'react';
import {baseURL} from '../../Config'
import Railway from '../../../assets/railway-station.jpg'
import TS from '../../../assets/train-station.jpg'


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
    return (
      <div></div>
    )
  }
}

export default Home