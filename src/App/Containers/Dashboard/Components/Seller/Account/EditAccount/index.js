import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

import FormCorporate from './Corporate';
import FormStore from './Store';
import './style.scss';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class EditAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      register: 'corp',
      corporate: {
        corpName: '',
        corpEmail: '',
        corpPhone: '',
        corpPhonePrefix: '+62',
        corpNPWP: '',
        corpLegality: '',
        corpCountry: 'id',
        corpProvince: 'jog',
        corpCity: 'wno',
        corpDistrict: 'mulo',
        corpZip: '',
        corpAddress: ''
      },
      store: {
        storeName: '',
        storeEmail: '',
        storePhone: '',
        storePhonePrefix: '',
        storeCountry: 'id',
        storeProvince: 'jog',
        storeCity: 'wno',
        storeDistrict: 'mulo',
        storeZip: '',
        storeAddress: '',
        image: ''
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
    const { register } = this.state;
    if (register === 'corp') {
      this.setState({
        corporate: {
          ...this.state.corporate,
          [name]: event.target.value
        }
      });
    } else {
      this.setState({
        store: {
          ...this.state.store,
          [name]: event.target.value
        }
      });
    }
  }

  backHandler() {

  }

  addHandler() {
    
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
            {register === 'corp' ? (
              <FormCorporate 
                attribute={corporate}
                handleChange={this.handleChange}
              />
              ) : (
              <FormStore 
                attribute={store}
                handleChange={this.handleChange}
              />
              )
            }
          </DialogContent>
          <DialogActions className="customDialogAct">
            <Button 
              className="btnBackCust"
              onClick={this.props.handler} 
              color="primary"
            >
              Back
            </Button>
            <Button 
              className="btnAddCust"
              onClick={this.props.handler} 
              color="primary"
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

EditAccount.propType = {
  open: PropTypes.bool,
  handler: PropTypes.func,
}

export default EditAccount;
