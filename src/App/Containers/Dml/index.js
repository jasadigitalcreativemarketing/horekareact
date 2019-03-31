/* eslint-disable no-undef */
import React, { Component } from 'react';
import NavbarComponent from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import DmlSidebar from '../../Components/Dmlsidebar';
import {Navbar, Nav, NavDropdown, Row, Col, Card, Container, Form, FormControl, Table, Pagination} from 'react-bootstrap'
import './style.scss'
import { faLink, faTrash, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';
import { baseURL } from '../../Config';
import {connect} from 'react-redux'


class Dml extends Component {

    state = {
        dataDML: [],
        itemName: '',
        itemDescription: '',
        category: '',
        seller: '',
        gramation: '',
        length: '',
        width: '',
        height: '',
        weight: '',
        supplierId1: '',
        supplierId2: '',
        supplierId3: '',
        deliveryUnit: '',
        image:null,
        lgShow: false,
        imageSend: null
    }

    componentDidMount = () => {
        this.getDMLData()
    }

    modalHandler = (status) => {
        this.setState({lgShow: status})
    }

    goToPage = (page) => {
        const {history} = this.props
        history.push(page)
      }

    setItemName = (event) => {
        const {value} = event.target
        this.setState({itemName: value})
    }

    setItemDesc = (event) => {
        const {value} = event.target
        this.setState({itemDescription: value})
    }
    setCategory = (event) => {
        const {value} = event.target
        this.setState({category: value})
    }
    setSeller = (event) => {
        const {value} = event.target
        this.setState({seller: value})
    }
    setGramation = (event) => {
        const {value} = event.target
        this.setState({gramation: value})
    }
    setLength = (event) => {
        const {value} = event.target
        this.setState({length: value})
    }
    setWidth = (event) => {
        const {value} = event.target
        this.setState({width: value})
    }
    setWeight = (event) => {
        const {value} = event.target
        this.setState({weight: value})
    }
    setHeight = (event) => {
        const {value} = event.target
        this.setState({height: value})
    }

    onChangeImage = (event) => {
        const {files} = event.target
        const reader = new FileReader()
        console.log(files, 'coco')
        const url = reader.readAsDataURL(files[0])
        reader.onloadend = () => {
            this.setState({
                image: reader.result,
                imageSend: files[0].name
            })
        }
    }

    postDMLHandler = () => {
        const  {companyId} = this.props
        const {itemName, supplierId1, supplierId2, supplierId3, deliveryUnit, length, width, height, weight, image, imageSend} = this.state
        const url = `${baseURL}/Horeka/rest/HorekaStoreService/storeDmlArticle`
        const headers = {
            "Content-Type": "application/json"

        }
        const body = {
            request:{
                customerID:companyId,
                articleName:itemName,
                supplierID1:supplierId1,
                supplierID2:supplierId2,
                supplierID3:supplierId3,
                deliveryUnit:deliveryUnit,
                dimentionlength:length,
                dimentionwidth:width,
                dimentionheight:height,
                dimentionweight:weight,
                imageurl: imageSend
                }
        }

        fetch(url, {
            method: 'post',
            headers,
            body: JSON.stringify(body)
        }).then((response) => response.json()).then(data => this.postDML(data)).catch((e) => console.log(e))
    
    }

    postDML = (response) => {
        if(response.response.resultStr === 'Store DML Success') {
            this.setState({lgShow: false}, () => {
                this.getDMLData()
            })
        } else {
            return null
        }
    }
      

      getDMLData = async () => {
          const url = `${baseURL}/Horeka/rest/HorekaStoreService/getDmlArticleList
          `
          // eslint-disable-next-line react/prop-types
          const {companyId} = this.props
          console.log(companyId, 'koko')
          const headers = {
              "Content-Type": 'application/json'
          }
          const body = {
              request: {
                custID: companyId
              }
          }
          
          await fetch(url, {
              headers,
              body: JSON.stringify(body) ,
              method: 'post'
          }).then((response) => response.json()).then((data) => this.setDataDMLHandler(data)).catch((e) => console.log(e))
      }
    
      setDataDMLHandler = (data) => {
          console.log("PAPA", data)
          this.setState({dataDML: data.response.dmlArt['dml-art']})
      }

    render() {
        const {history} = this.props
        const {dataDML} = this.state
        console.log(this.state, 'pop')
        return (
            <div>
                <NavbarComponent history={history} />
                <Container className="mt-3 mb-3">
                <Row>
                <DmlSidebar 
                history={this.props.history} 
                setItemName={this.setItemName}
                setItemDesc={this.setItemDesc}
                setCategory={this.setCategory}
                setGramation={this.setGramation}
                setLength={this.setLength}
                setSeller={this.setSeller}
                setWidth={this.setWidth}
                setHeight={this.setHeight}
                setWeight={this.setWeight}
                postDml={this.postDMLHandler}
                modalHandler={this.modalHandler}
                modalState={this.state.lgShow}
                changeImage={this.onChangeImage}
                image={this.state.image}
                />
                <Col md={9} className="pl-1 dml-page">
                    <Card className="p-3 no-border">
                        <h5>Daily Market List</h5>
                        <div className="d-flex mt-4">
                            <div className="mr-auto">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Priotiy:</Form.Label>
                                <Form.Control as="select">
                                <option>Priority</option>
                                <option>Priority2</option>
                                </Form.Control>
                            </Form.Group>
                            </div>
                            <div className="mr-auto ml-auto">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Department:</Form.Label>
                                <Form.Control as="select">
                                <option>Department</option>
                                <option>Department2</option>
                                </Form.Control>
                            </Form.Group>
                            </div>
                            <div className="mr-auto ml-auto">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Delivery Date:</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                            </div>
                            <div className="mr-auto ml-auto">
                            <Form.Group controlId="exampleForm.ControlSelect1" className="mt-4 search">
                                <Form.Control type="text" placeholder="search item"/>
                            </Form.Group>
                            </div>
                            <div className="mr-auto ml-auto mt-4">
                                <p><FontAwesomeIcon icon={faLink} /> Last DML</p>
                            </div>
                            <div className="mr-auto ml-auto mt-4">
                                <p><FontAwesomeIcon icon={faTrash} /> Delete</p>
                            </div>
                        </div>
                        <Table responsive>
                            <thead>
                                <tr>
                                <th></th>
                                <th>Item</th>
                                <th>Details</th>
                                <th>Category</th>
                                <th>Qty</th>
                                <th>Del Unit</th>
                                <th>Suplier</th>
                                <th>Unit Price</th>
                                <th>Sub-total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataDML.map((x, index) => (
                                    <tr key={index} >  
                                    <td><input type="checkbox"></input></td>
                                    <td><img src="img/wortel.jpg" height="60" width="70" className="img-rounded"></img></td>
                                    <td><a href="">{x['item-name']} </a></td>
                                    <td> {x['article-name']} </td>
                                    <td><Form.Control as="select">
                                    <option> {x['delivery-content']} </option>
                                    </Form.Control></td>
                                    <td><Form.Control as="select">
                                    <option> {x['delivery-unit']} </option>
                                    </Form.Control></td>
                                    <td><Form.Control as="select">
                                   <option> {x['supplierID']}</option>
                                    </Form.Control></td>
                                    <td> {x['unit-price']} </td>
                                    <td> Rp. {x['delivery-content'] * x['unit-price']} </td>
                                    </tr>
                                ))}
                                
                            </tbody>
                        </Table>
                        <Pagination>
                            <Pagination.First><FontAwesomeIcon icon={faChevronLeft} /></Pagination.First>
                            <Pagination.Prev>{'prev'}</Pagination.Prev>
                            <Pagination.Item active>{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Next>{'next'}</Pagination.Next>
                            <Pagination.Last><FontAwesomeIcon icon={faChevronRight} /></Pagination.Last>
                        </Pagination>
                        {/* <DataTable
                            columns={columns}
                            data={data}
                            selectableRows
                            pagination
                        /> */}
                    </Card>
                </Col>
                </Row>
                </Container>
                <Footer history={history} />
                
            </div>
        );
    }
}

Dml.propTypes = {

};

const mapStateToProps = (state) => ({
    companyId: state.auth && state.auth.companyID
})

export default connect(mapStateToProps, null)  (Dml);