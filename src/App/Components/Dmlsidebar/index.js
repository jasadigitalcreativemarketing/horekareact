import React, { Component } from 'react'
import { Col, Card, Collapse, Button, Modal, Form, FormControl, FormGroup } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './style.scss'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class DmlSidebarComponent extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      openDaily: false,
      openNotif: false

    }
  }

  render () {
    const { openDaily, openNotif } = this.state
    const { setItemName, setCategory, setItemDesc, setGramation, setLength, setWidth, setWeight, setSeller, setHeight, modalState, modalHandler, changeImage, image } = this.props
    return (
      <Col md={3} className='pr-1 dmlsidebar'>
        <Card className='p-3 no-border'>
          <div className='d-flex'>
            <img src='img/user.png' height='55' width='55' />
            <span className='ml-3 mt-1'>
              <h5 className='mb-0 text-primary'>Jambuluwuk</h5>
              <p className='text-light'>admin</p>
            </span>
          </div>
        </Card>

        <Card className='mt-3 no-border pt-2 pb-2'>
        <>
          <a
            onClick={() => this.setState({ openNotif: !openNotif })}
            aria-controls='notifications'
            aria-expanded={openNotif}
            className='cursor-pointer p-1 mb-0 dml-sidebar-menu'
          >
            <h6 className='mb-0 pl-2'>Notifications</h6>
          </a>
          <Collapse in={this.state.openNotif}>
            <div id='notifications' className='ml-4 mt-2 dml-sidebar-submenu mb-2'>
              <a className='p-1 d-block cursor-pointer'>Messages</a>
              <a className='p-1 d-block cursor-pointer'>Request</a>
            </div>
          </Collapse>
          </>
            <>
              <a
                onClick={() => this.setState({ openDaily: !openDaily })}
                aria-controls='dailymarket'
                aria-expanded={openDaily}
                className='cursor-pointer p-1 mb-0 dml-sidebar-menu'
              >
                <h6 className='mb-0 pl-2'>Daily Market</h6>
              </a>
              <Collapse in={this.state.openDaily}>
                <div id='dailymarket' className='ml-4 mt-2 dml-sidebar-submenu'>
                  <a className='p-1 d-block cursor-pointer' onClick={() => modalHandler(true)}>Manage Item</a>
                  <a className='p-1 d-block cursor-pointer'>Daily Market List</a>
                  <a className='p-1 d-block cursor-pointer'>Edit</a>
                </div>
              </Collapse>
          </>
        </Card>
        
        <Modal
          size='lg'
          show={modalState}
          className='dml'
          onHide={() => modalHandler(false)}
          aria-labelledby='example-modal-sizes-title-lg'
        >
          <Modal.Body className=''>
            <div className='d-flex mb-3'>
              <img className='' src={image || 'img/thumbnail.png'} />
              <div className='mt-5 ml-4'>
                {/* <Button size='lg' variant='secondary' className=''>upload image</Button> */}
                <label className='btn btn-warning btn-font no-padding-horizontal'>
                  <input onChange={changeImage} type='file' hidden />
                  Upload Image
                </label>
                <p><small>File size maximal 10 megabyte.</small> <br /> <small>Allowed file extension:</small> <br /> <small>JPG, JPEG, PNG.</small>  </p>
              </div>
            </div>
            <Form>
              <Form.Group controlId='exampleForm.ControlInput1'>
                <Form.Label>Item Name</Form.Label>
                <Form.Control onChange={setItemName} type='email' placeholder='' />
              </Form.Group>
              <Form.Group controlId='exampleForm.ControlSelect1'>
                <Form.Label>Item Description</Form.Label>
                <Form.Control onChange={setItemDesc} as='select'>
                  <option>Select Description</option>

                  <option value='carrot' >Carrot - Vegetable</option>
                  <option value='apple' >Apple - Fruit</option>
                </Form.Control>
                <FontAwesomeIcon icon={faChevronDown} />
              </Form.Group>
              <Form.Group controlId='exampleForm.ControlSelect1'>
                <Form.Label>Category by Horeka</Form.Label>
                <Form.Control onChange={setCategory} as='select'>
                  <option>Select Category</option>
                  <option value='Agriculture & food' >Agriculture & food > Fresh Fruit > Carrot</option>
                </Form.Control>
                <FontAwesomeIcon icon={faChevronDown} />
              </Form.Group>
              <Form.Group controlId='exampleForm.ControlSelect1' className='mb-3'>
                <Form.Label>Seller</Form.Label>
                <Form.Control onChange={setSeller} as='select'>
                  <option> Select Seller </option>
                  <option value='Migunani' >Migunani</option>
                  <option value='Apple - Fruit' >Apple - Fruit</option>
                </Form.Control>
                <FontAwesomeIcon icon={faChevronDown} />
              </Form.Group>

              <a className='text-primary text-italic text-bold cursor-pointer'>add seller +</a>

              <Form.Group controlId='exampleForm.ControlSelect1' className='mt-3'>
                <Form.Label>Gramation</Form.Label>
                <Form.Control onChange={setGramation} as='select'>
                  <option>Select Gramation</option>
                  <option value='kg' >Kilogram</option>
                  <option value='g' >Gram</option>
                </Form.Control>
                <FontAwesomeIcon icon={faChevronDown} />
              </Form.Group>
              <Form.Label>Dimention</Form.Label>
              <Form.Row className='mb-2'>
                <Col>
                  <Form.Control onChange={setLength} placeholder='length (cm)' />
                </Col>
                <Col>
                  <Form.Control onChange={setWidth} placeholder='width (cm)' />
                </Col>
              </Form.Row>
              <Form.Row className=''>
                <Col>
                  <Form.Control onChange={setHeight} placeholder='height (cm)' />
                  <Button onClick={() => modalHandler(false)} size='lg' variant='dark' className='mt-4 full-width'>Back</Button>
                </Col>
                <Col>
                  <Form.Control onChange={setWeight} placeholder='weight (kg)' />
                  <Button onClick={this.props.postDml} size='lg' variant='primary' className='mt-4 full-width'>Add Item</Button>
                </Col>
              </Form.Row>
            </Form>
          </Modal.Body>
        </Modal>
      </Col>

    )
  }
}

DmlSidebarComponent.propTypes = {
  history: PropTypes.object.isRequired,
  setItemName: PropTypes.func,
  setItemDesc: PropTypes.func,
  setCategory: PropTypes.func,
  setLength: PropTypes.func,
  setSeller: PropTypes.func,
  setGramation: PropTypes.func,
  setWidth: PropTypes.func,
  setWeight: PropTypes.func,
  setHeight: PropTypes.func,
  postDml: PropTypes.func,
  modalState: PropTypes.func,
  modalHandler: PropTypes.func,
  changeImage: PropTypes.func,
  image: PropTypes.string
}

export default DmlSidebarComponent
