import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';
import compose from 'recompose/compose';

import './style.scss';


let id = 0;
function createData(checked,image, name, ptName, address, email, action) {
  id += 1;
  return { id,checked,image, name, ptName, address , email, action };
}

const rows = [
  createData(true,'https://www.chainstoreage.com/wp-content/uploads/2018/11/AdoreMe_store.jpg','Abadi Jaya', 'PT.Mugi Berkah', 'Jl.Menuju Kesuksesan No.1 Tebet, Jakarta Selatan', 'abadi@gmail.com', 'button'),
  createData(true,'https://www.chainstoreage.com/wp-content/uploads/2018/11/AdoreMe_store.jpg','Makmur Maning', 'PT.Untung Selalu', 'Jl.Menuju Kesuksesan No.1 Tebet, Jakarta Selatan', 'su@gmail.com', 'button'),
];

class Account extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    init: false
  }

  componentWillReceiveProps(newProps) {
    console.log('newProps',newProps);
  }

  render() {

    return (
      <div className="sellerAccount">
        <h5 className="title">Manage Seller - Seller Account</h5>
        <Paper className>
          <Table className>
            <TableHead>
              <TableRow className="customRow">
                <TableCell className="customHead"></TableCell>
                <TableCell className="customHead" align="left">No</TableCell>
                <TableCell className="customHead" align="left">Photo</TableCell>
                <TableCell className="customHead" align="left">Store Name</TableCell>
                <TableCell className="customHead" align="left">PT Name</TableCell>
                <TableCell className="customHead" align="left">Address</TableCell>
                <TableCell className="customHead" align="left">Email</TableCell>
                <TableCell className="customHead" align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell className="customCell" align="center">
                    <Checkbox color="primary"/>
                  </TableCell>
                  <TableCell className="customCell">{row.id}</TableCell>
                  <TableCell className="customCell">
                    <img className="storeImage" src={row.image} />
                  </TableCell>
                  <TableCell className="customCell" component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell className="customCell" align="left">{row.ptName}</TableCell>
                  <TableCell className="customCell" align="left">{row.address}</TableCell>
                  <TableCell className="customCell" align="left">{row.email}</TableCell>
                  <TableCell className="customCell" align="left">
                    <Button variant="contained" size="small" className="customButton">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

Account.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
)(Account);