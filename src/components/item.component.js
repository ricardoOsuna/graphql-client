import React from 'react'

const Item = ({ index, status, itemName, inputType, removeItem }) => (
  <div className="form-row mt-5">
    <div key={`label${index}`} className="form-group col-md-4">
      <label>{itemName} {index+1}</label>
      <input type={inputType}
          placeholder={itemName}
          className="form-control"/>
    </div>

    <div key={`reference${index}`} className="form-group col-md-4">
      <label>Reference</label>
      <input type="text"
        placeholder="Reference: Work"
        className="form-control"/>
    </div>

    <div key={`status${index}`} className="form-group col-md-4">
      <label>Status</label>
      <div className="input-group">
        <select className="form-control col-md-3">
          <option value="1">ENABLED</option>
          <option value="0">DISABLED</option>
        </select>

        <div className="input-group-append col-md-1">
          <button type="button"
            className="btn btn-danger"
            onClick={ () => removeItem(index) }>
              &times;
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Item;