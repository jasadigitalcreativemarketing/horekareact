import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Search } from '@material-ui/icons';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import './style.scss';

let id = 0;
function createData(checked,image, name, ptName, address, email, action) {
  id += 1;
  return { id,checked,image, name, ptName, address , email, action };
}

const rows = [
  createData(true,'https://res.cloudinary.com/dk0z4ums3/image/upload/v1522914788/attached_image/manfaat-wortel-bagi-kesehatan-alodokter.jpg','Wortel Oke', 'Agriculture & Food', 'Lorem ipsum is simply dummy text of the printing and typesetting industry', 'Rp.6000', 'button'),
  createData(true,'https://res.cloudinary.com/dk0z4ums3/image/upload/v1533004927/attached_image/mengolah-daging-sapi-dengan-benar-alodokter.jpg','Daging Sapi Jaya', 'Agriculture & Food', 'Lorem ipsum is simply dummy text of the printing and typesetting industry', 'Rp.16000', 'button'),
  createData(true,'http://www.tuquh.com/image/cache/data/Minuman/2410080002074-500x500.jpg','Aqua Box 600ml', 'Agriculture & Food', 'Lorem ipsum is simply dummy text of the printing and typesetting industry', 'Rp.60000', 'button'),
  createData(true,'http://shop.mandirimco.co.id/web/image/product.template/5271/image','Aqua 600ml', 'Agriculture & Food', 'Lorem ipsum is simply dummy text of the printing and typesetting industry', 'Rp.6000', 'button'),
];

class ViewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: false,
      lastActive: 10,
      gramation: 10
    }
  }

  render() {

    return (
      <div className="sellerInventory">
        <h5 className="title">Manage Seller - Product Seller - Detail Product Seller</h5>
        <div className="row row-action mb-3">
          <div className="col-4 position-relative">
            <Search className="iconSearch"/>
            <input className="searchInput" type="text" placeholder="search" ref="search"/>
          </div>

          <div className="col-2 lastActive pl-0">
            <Select
              className="customSelect"
              value={this.state.lastActive}
              onChange={(e) => this.setState({lastActive: e.target.value})}
            >
              <MenuItem value={10}>All Category</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>

          <div className="col-2 lastActive pl-0">
            <Select
              className="customSelect"
              value={this.state.gramation}
              onChange={(e) => this.setState({gramation: e.target.value})}
            >
              <MenuItem value={10}>Gramation</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
        </div>
        <Paper className>
          <Table className>
            <TableHead>
              <TableRow className="customRow">
                <TableCell className="customHead"></TableCell>
                <TableCell className="customHead" align="left">No</TableCell>
                <TableCell className="customHead" align="left">Photo</TableCell>
                <TableCell className="customHead" align="left">Name</TableCell>
                <TableCell className="customHead" align="left">Category</TableCell>
                <TableCell className="customHead" align="left">Product Details</TableCell>
                <TableCell className="customHead" align="left">Price</TableCell>
                <TableCell className="customHead" align="left"></TableCell>
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
                  <TableCell className="customCell btn-edit" align="left">
                    <Button variant="contained" size="small" className="customButton edit">
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell className="customCell btn-details" align="left">
                    <Button variant="contained" size="small" className="customButton details">
                      View Details
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

export default ViewProduct;