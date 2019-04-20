import React from 'react';
import PropTypes from 'prop-types';

const FormCorporate = ({ attribute, handleChange }) => {
  return (
    <React.Fragment>
      <form className="formCorporate row">
        <div className="col-12 my-1">
          <label>PT/Corporate Name</label>
          <input className="form-control"/>
        </div>
        <div className="col-12 my-1">
          <label>Email</label>
          <input className="form-control"/>
        </div>
        <div className="col-12 my-1">
          <label>Phone Number</label>
          <input className="form-control"/>
        </div>
        <div className="col-6 my-1">
          <label>NPWP</label>
          <input className="form-control"/>
        </div>
        <div className="col-6 my-1">
          <label>Legality</label>
          <input className="form-control"/>
        </div>
        <div className="col-12 my-1">
          <label>Country</label>
          <input className="form-control"/>
        </div>
        <div className="col-6 my-1">
          <label>Province</label>
          <input className="form-control"/>
        </div>
        <div className="col-6 my-1">
          <label>City</label>
          <input className="form-control"/>
        </div>
        <div className="col-6 my-1">
          <label>District</label>
          <input className="form-control"/>
        </div>
        <div className="col-6 my-1">
          <label>Zip Code</label>
          <input className="form-control"/>
        </div>
        <div className="col-12 my-1">
          <label>Address</label>
          <textarea className="form-control"></textarea>
        </div>
      </form>
    </React.Fragment>
  );
}

FormCorporate.propType = {
  attribute: PropTypes.object,
}

export default FormCorporate;