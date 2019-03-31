import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './style.scss'

class ModalDmlManage extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          lgShow: false,
        };
      }

  render () {
    let lgClose = () => this.setState({ lgShow: false });
    return (
        <Modal
        size="lg"
        show={this.state.lgShow}
        onHide={lgClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    )
  }
}

ModalDmlManage.propTypes = {
  history: PropTypes.object.isRequired
}

export default ModalDmlManage
