import React from 'react'
import PropTypes from 'prop-types';

const FooterComponent = () => {


  return (
    <footer>
  {/* Start Footer */}
  <div className="bg-main">
    <div className="container">
      <div className="row footer-box">
        <div className="col">
          <h5>STAY TUNED</h5>
          <div className="input-group">
            <input type="email" className="form-control subscribe-box" placeholder="enter your email here" />
            <div className="input-group-append">
              <button className="btn subscribe-btn" type="button">SUBSCRIBE</button>
            </div>
          </div>
          <p className="p-style1">*we promise never spam you :)</p>
        </div>
        <div className="col">
          <table className="footer-table">
            <tbody><tr>
                <th>HOREKA</th>
                <th>BUYER</th>
                <th>SELLER</th>
              </tr>
              <tr>
                <td><a href="#">About us</a></td>
                <td><a href="#">How to buy</a></td>
                <td><a href="#">Selling at Horeka</a></td>
              </tr>
              <tr>
                <td><a href="#">Career</a></td>
                <td><a href="#">Payment Method</a></td>
                <td><a href="#">Seller Center</a></td>
              </tr>
              <tr>
                <td><a href="#">News</a></td>
                <td><a href="#">See Promo</a></td>
                <td><a href="#">Super Seller</a></td>
              </tr>
              <tr>
                <td><a href="#">Contact Us</a></td>
                <td><a href="#">Recent Products</a></td>
                <td />
              </tr>
              <tr>
                <td><a href="#">Horeka Quatation</a></td>
                <td><a href="#">Tags</a></td>
                <td />
              </tr>
            </tbody></table>
        </div>
        <div className="col d-flex align-items-center footer-badge">
          <div className="row">
            <div className="col text-center"> 
              <button type="submit" className="btn footer-btn">F</button>
            </div>
            <div className="col text-center"> 
              <button type="submit" className="btn footer-btn">T</button>
            </div>
            <div className="col text-center"> 
              <button type="submit" className="btn footer-btn">I</button>
            </div>
            <div className="col text-center"> 
              <button type="submit" className="btn footer-btn">P</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="bg-white">
    <div className="container">
      <div className="row">
        <div className="col copyright text-center">
          <p>Copyright 2018 - All Right Reserved. Development by Digital Creative Consultant</p>
        </div>
      </div>
    </div>
  </section>
  {/* End Footer */}

      </footer>
  )
}

FooterComponent.propTypes = {
  history: PropTypes.object.isRequired
}

export default FooterComponent