import React, { Component, Fragment } from 'react'

// Components
import Item from '../items/item.component';

// Services
import {
  setItemServices,
  removeItemServices,
  addItemServices
} from '../../services/items.service';

class Phones extends Component {
  state = {
    phones: this.props.phones,
  };

  setItems = (e, index, field) => {
    this.setState({ phones: setItemServices(e, index, field, this.state.phones, 'phones')})
  };

  removeItem = index => {
    this.setState({ phones: removeItemServices(index, this.state.phones, 'phones')})
  };

  // TODO: Create a table to view the phones better than rigth now
  render() {
    const { phones } = this.state;
    return (
      <Fragment>
        { phones.map((item, index) => (
          <Item
            item={item}
            index={index}
            itemName='Phone'
            setItems={this.setItems}
            removeItem={this.removeItem}
          />
        ))}

        <div className="form-group d-flex justify-content-center col-m-12">
          <button type="button"
            className="btn btn-warning"
            onClick={ () => this.setState({ phones: addItemServices(phones, 'phones')})}>
            New Phone
          </button>
        </div>
      </Fragment>
    );
  }
};

export default Phones;