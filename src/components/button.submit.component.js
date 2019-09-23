import React from 'react'

const ButtonSubmit = ({ status, text}) => (
  <div className="form-group d-flex justify-content-center col-m-12">
    <button type="submit"
      className={`btn ${status}`}>{ text }</button>
  </div>
);

export default ButtonSubmit;