import React, { Component } from 'react';
import {Col, Card, Collapse, Button} from 'react-bootstrap'
import PropTypes from 'prop-types'
import './style.scss'

const DmlSidebarComponent = ({history}) => {
    

    const goToPage = (page) => {
      history.push(page)
    }

    class Dmlsidebar extends Component {
      constructor(props, context) {
        super(props, context);
    
        this.state = {
          open: false,
        };
      }
    
      render() {
        const { open } = this.state;
    return (
            <Col md={3} className="pr-1 dmlsidebar">
                <Card className="p-3 no-border">
                  <div className="d-flex">
                    <img src="img/user.png" height="55" width="55" ></img>
                    <span className="ml-3 mt-1">
                      <h5 className="mb-0 text-primary">Jambuluwuk</h5>
                      <p className="text-light">admin</p>
                    </span>
                    </div>
                </Card>

                <Card className="p-3 no-border">
                <>
        <Button
          onClick={() => this.setState({ open: !open })}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          click
        </Button>
        <Collapse in={this.state.open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </>
                </Card>
            </Col>
    )
  }
}
  
  DmlSidebarComponent.propTypes = {
    history: PropTypes.object.isRequired
  }
}
  
  export default DmlSidebarComponent


  