import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";
import './index.scss';

const FormStore = ({ attribute, handleChange }) => {
  return (
    <React.Fragment>
      <form className="formCorporate row formStore">
        <div className="col-12 my-1">
          <label>Photo Profile</label>
          <div className="row">
            <div className="col">
              <img class="photo-profile" src="https://via.placeholder.com/250"/>
            </div>
            <div className="col">
              <div className="row h-100">
                <div className="buttonContainer col-12 position-relative row justify-content-start align-items-center">
                  <input type="file" className="position-absolute inp-file"/>
                  <Button 
                    variant="contained" 
                    className="btnCustomModal active"
                    onClick={() => console.log('some-actions')}
                  >
                    Upload Image
                  </Button>
                </div>
                <div className="col-12">
                  <p className="information">
                    File size maximum 10 megabyte. <br/>
                    Allowed file extension: <br/>
                    JPG,JPEG,PNG
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 my-1">
          <label>Store Name</label>
          <input 
            type="text"
            className="form-control"
            value={attribute.storeName} 
            onChange={handleChange('storeName')}
          />
        </div>
        <div className="col-12 my-1">
          <label>Email</label>
          <input 
            type="text"
            className="form-control" 
            value={attribute.storeEmail}
            onChange={handleChange('storeEmail')}
          />
        </div>
        <div className="col-12 my-1">
          <label>Phone Number</label>
          <input type="text" className="form-control"/>
        </div>
        <div className="col-12 my-1">
          <label>Country</label>
          <Select
            className="customSelect"
            value={attribute.storeCountry}
            onChange={handleChange('storeCountry')}
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
            value={attribute.storeProvince}
            onChange={handleChange('storeProvince')}
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
            value={attribute.storeCity}
            onChange={handleChange('storeCity')}
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
            value={attribute.storeDistrict}
            onChange={handleChange('storeDistrict')}
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
            value={attribute.storeZip}
            onChange={handleChange('storeZip')}
          />
        </div>
        <div className="col-12 my-1">
          <label>Address</label>
          <textarea 
            className="form-control"
            value={attribute.storeAddress}
            onChange={handleChange('storeAddress')}
          ></textarea>
        </div>
      </form>
    </React.Fragment>
  );
}

FormStore.propType = {
  attribute: PropTypes.object,
}

export default FormStore;