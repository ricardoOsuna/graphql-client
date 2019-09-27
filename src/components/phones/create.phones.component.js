import React, { Component } from 'react'

// Components
import CreateItem from '../items/create.item.component';

// Services
import {
  setItemServices,
  removeItemServices,
  addItemServices
} from '../../services/items.service';

class CreatePhones extends Component {
  state = {
    phones: this.props.phones,
  };

  setItems = (e, index, field) => {
    this.setState({ phones: setItemServices(e, index, field, this.state.phones, 'phones')})
  };

  removeItem = index => {
    const phones = removeItemServices(index, this.state.phones, 'phones');
    if (phones) {
      this.setState({ phones });
    }
  };

  // TODO: Create a table to view the phones better than rigth now
  render() {
    const { phones } = this.state;
    return (
      <div className="pb-5">
        <div className="form-group d-flex justify-content-left col-m-12">
          <button type="button"
            className="btn btn-warning"
            onClick={ () => this.setState({ phones: addItemServices(phones, 'phones')})}>
            New Phone
          </button>
        </div>

        { phones.map((item, index) => (
          <CreateItem
            item={item}
            index={index}
            itemName='Phone'
            setItems={this.setItems}
            removeItem={this.removeItem}
          />
        ))}
      </div>
    );
  }
};

export default CreatePhones;