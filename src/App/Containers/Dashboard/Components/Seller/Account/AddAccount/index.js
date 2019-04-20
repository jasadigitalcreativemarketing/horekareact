import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import FormCorporate from './Corporate';
import './style.scss';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AddAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      register: 'corp',
      corporate: {
        corpName: '',
        corpEmail: '',
        corpPhone: '',
        corpNPWP: '',
        corpLegality: '',
        corpCountry: '',
        corpProvince: '',
        corpCity: '',
        corpDistrict: '',
        corpZip: '',
        corpAddress: ''
      },
      store: {

      }
    }

    this.registerHandler = this.registerHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  registerHandler(tab) {
    this.setState({
      register: tab
    });
  }

  handleChange = name => event => {
    this.setState({
      corporate: {
        [name]: event.target.value
      }
    });
  }

  render() {
    const { registerHandler } = this;
    const { register, corporate, store } = this.state;
    return (
      <div className="addAccount">
        <Dialog
          open={this.props.open}
          TransitionComponent={Transition}
          onClose={this.props.handler}
          className="customDialog"
        >
          <DialogTitle id="regTitle">
            <Row className="justify-content-center">
              <div className="col">
                <Button 
                  onClick={() => registerHandler('corp')} 
                  className={register === 'corp' ? 'btnCustomModal active' : 'btnCustomModal'}
                  fullWidth
                >
                  CORPORATE
                </Button>
              </div>
              <div className="col">
                <Button 
                  onClick={() => registerHandler('store')}
                  className={register === 'store' ? 'btnCustomModal active' : 'btnCustomModal'}                  
                  fullWidth
                >
                  STORE
                </Button>
              </div>
            </Row>
          </DialogTitle>
          <DialogContent>
            <FormCorporate 
              attribute={corporate}
              handleChange={this.handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handler} color="primary">
              Disagree
            </Button>
            <Button onClick={this.props.handler} color="primary">
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

AddAccount.propType = {
  open: PropTypes.bool,
  handler: PropTypes.func,
}

export default AddAccount;
