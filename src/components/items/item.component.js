import React from 'react'
import _ from 'underscore';

// Components
import RemoveItem from './remove.item.component';
import DestroyItem from './destroy.item.component';

const Item = ({ item, index, itemName, setItems, removeItem }) => {
  const itemType = `${itemName.toLowerCase()}s`;
  if (_.isBoolean(item.default)) {
    item.default = item.default ? 1 : 0;
  }
  return (
    <div className="form-row">
      <div className="form-group col-md-5">
        <label>{itemName} {index+1}</label>
        <input type={(itemType === 'emails') ? 'email' : 'number'}
          placeholder={itemName}
          defaultValue={item[`${itemName.toLowerCase()}`]}
          className="form-control"
          required
          onChange={ e => setItems(e, index, itemName.toLowerCase(), itemType) }/>
      </div>

      <div className="form-group col-md-4">
        <label>Reference</label>
        <input type="text"
          placeholder="Work"
          defaultValue={item.reference}
          className="form-control"
          required
          onChange={ e => setItems(e, index, 'reference', itemType) }/>
      </div>

      <div className="form-group col-md-3">
        <label>Default</label>
        <div className="input-group">
          <select className={`form-control ${itemType}`}
            onChange={ e => setItems(e, index, 'default', itemType) }>
            <option value="1" selected={parseInt(item.default)}>ENABLED</option>
            <option value="0" selected={!parseInt(item.default)}>DISABLED</option>
          </select>

          { !item._id && (
            <RemoveItem
              removeItem={removeItem}
              index={index}
              itemType={itemType}
            />
          )}

          { item._id && (
            <DestroyItem
              _id={item._id}
              itemType={itemType}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Item;