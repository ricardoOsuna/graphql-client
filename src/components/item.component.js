import React, { Component } from 'react'

class Item extends Component {
  state = {
    item: this.props.item,
    index: this.props.index,
    itemName: this.props.itemName
  }
  render() {
    const { item, index, itemName } = this.state;
    const itemType = `${itemName.toLowerCase()}s`;
    const inputType = (itemType === 'emails') ? 'email' : 'number';

    return (
      <div className="form-row">
        <div className="form-group col-md-5">
          <label>{itemName} {index+1}</label>
          <input type={inputType}
            placeholder={itemName}
            defaultValue={item[`${itemName.toLowerCase()}`]}
            className="form-control"
            onChange={ e => this.props.setItems(e, index, itemName.toLowerCase(), itemType) }/>
        </div>

        <div className="form-group col-md-4">
          <label>Reference</label>
          <input type="text"
            placeholder="Reference: Work"
            defaultValue={item.reference}
            className="form-control"
            onChange={ e => this.props.setItems(e, index, 'reference', itemType) }/>
        </div>

        <div className="form-group col-md-3">
          <label>Default</label>
          <div className="input-group">
            <select className="form-control"
              onChange={ e => this.props.setItems(e, index, 'default', itemType) }>
              <option value="1" selected={parseInt(item.default)}>ENABLED</option>
              <option value="0" selected={!parseInt(item.default)}>DISABLED</option>
            </select>

            <div className="input-group-append ml-2">
              <button type="button"
                className="btn btn-danger"
                onClick={ () => this.props.removeItem(index, itemType) }>
                  &times;
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Item;