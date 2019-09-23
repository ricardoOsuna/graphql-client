import React from 'react'

const Item = ({ index, itemDefault, itemName, inputType, setItems,removeItem }) => {
  const itemType = `${itemName.toLowerCase()}s`;
  return (
    <div className="form-row">
      <div className="form-group col-md-5">
        <label>{itemName} {index+1}</label>
        <input type={inputType}
          placeholder={itemName}
          className="form-control"
          onChange={e => setItems(e, index, itemName.toLowerCase(), itemType)}/>
      </div>

      <div className="form-group col-md-4">
        <label>Reference</label>
        <input type="text"
          placeholder="Reference: Work"
          className="form-control"
          onChange={e => setItems(e, index, 'reference', itemType)}/>
      </div>

      <div className="form-group col-md-3">
        <label>Default</label>
        <div className="input-group">
          <select className="form-control"
            onChange={e => setItems(e, index, 'default', itemType)}>
            <option value="1" selected={parseInt(itemDefault)}>ENABLED</option>
            <option value="0" selected={!parseInt(itemDefault)}>DISABLED</option>
          </select>

          <div className="input-group-append ml-2">
            <button type="button"
              className="btn btn-danger"
              onClick={ () => removeItem(itemType, index) }>
                &times;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Item;