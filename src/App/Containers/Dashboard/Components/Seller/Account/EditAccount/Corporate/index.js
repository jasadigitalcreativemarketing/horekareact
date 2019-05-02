import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './index.scss';

const FormEditCorporate = ({ attribute, handleChange }) => {
  return (
    <React.Fragment>
      <form className="formCorporate row">
        <div className="col-12 my-1">
          <label>PT/Corporate Name</label>
          <input
            type="text" 
            className="form-control"
            value={attribute.corpName} 
            onChange={handleChange('corpName')}
          />
        </div>
        <div className="col-12 my-1">
          <label>Email</label>
          <input 
            type="text"
            className="form-control" 
            value={attribute.corpEmail}
            onChange={handleChange('corpEmail')}
          />
        </div>
        <div className="col-12 my-1">
          <label>Phone Number</label>
          <input type="text" className="form-control"/>
        </div>
        <div className="col-6 my-1">
          <label>NPWP</label>
          <input 
            type="text"
            className="form-control"
            value={attribute.corpEmail}
            onChange={handleChange('corpNPWP')}
          />
        </div>
        <div className="col-6 my-1">
          <label>Legality</label>
          <input 
            type="text"
            className="form-control"
            value={attribute.corpLegality}
            onChange={handleChange('corpLegality')}
          />
        </div>
        <div className="col-12 my-1">
          <label>Country</label>
          <Select
            className="customSelect"
            value={attribute.corpCountry}
            onChange={handleChange('corpCountry')}
          >
            <MenuItem value="id">Indonesia</MenuItem>
            <MenuItem value="my">Malaysia</MenuItem>
            <MenuItem value="sg">Singapore</MenuItem>
          </Select>
        </div>
        <div className="col-6 my-1">
          <label>Province</label>
          <Select
            className="customSelect"
            value={attribute.corpProvince}
            onChange={handleChange('corpProvince')}
          >
            <MenuItem value="jog">DI Yogyakarta</MenuItem>
            <MenuItem value="bali">Bali</MenuItem>
            <MenuItem value="sumut">Sumatra Utara</MenuItem>
          </Select>
        </div>
        <div className="col-6 my-1">
          <label>City</label>
          <Select
            className="customSelect"
            value={attribute.corpCity}
            onChange={handleChange('corpCity')}
          >
            <MenuItem value="wno">Wonosari</MenuItem>
            <MenuItem value="sleman">Sleman</MenuItem>
            <MenuItem value="kul">Kulon Progo</MenuItem>
          </Select>
        </div>
        <div className="col-6 my-1">
          <label>District</label>
          <Select
            className="customSelect"
            value={attribute.corpDistrict}
            onChange={handleChange('corpDistrict')}
          >
            <MenuItem value="mulo">Mulo</MenuItem>
            <MenuItem value="sleman">Xyz</MenuItem>
            <MenuItem value="kul">Not Strict</MenuItem>
          </Select>
        </div>
        <div className="col-6 my-1">
          <label>Zip Code</label>
          <input 
            type="text"
            className="form-control"
            value={attribute.corpZip}
            onChange={handleChange('corpZip')}
          />
        </div>
        <div className="col-12 my-1">
          <label>Address</label>
          <textarea 
            className="form-control"
            value={attribute.corpAddress}
            onChange={handleChange('corpAddress')}
          ></textarea>
        </div>
      </form>
    </React.Fragment>
  );
}

FormEditCorporate.propType = {
  attribute: PropTypes.object,
}

export default FormEditCorporate;