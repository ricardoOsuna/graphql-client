import React, { Component } from 'react'

// Components
import CreateItem from '../items/create.item.component';

// Services
import {
  setItemServices,
  removeItemServices,
  addItemServices
} from '../../services/items.service';

class CreateEmails extends Component {
  state = {
    emails: this.props.emails
  };

  setItems = (e, index, field) => {
    this.setState({ emails: setItemServices(e, index, field, this.state.emails, 'emails')});
  };

  removeItem = index => {
    const emails = removeItemServices(index, this.state.emails, 'emails');
    if (emails) {
      this.setState({ emails });
    }
  };

  // TODO: Create a table to view the emails better than rigth now
  render() {
    const { emails } = this.state;
    return (
      <div className="pb-5">
        <div className="form-group d-flex justify-content-left col-m-12">
          <button type="button"
            className="btn btn-warning"
            onClick={ () => this.setState({ emails: addItemServices(emails, 'emails')})}>
            New Email
          </button>
        </div>

        { emails.map((item, index) => {
          return (
            <CreateItem
              item={item}
              index={index}
              itemName='Email'
              setItems={this.setItems}
              removeItem={this.removeItem}
            />
          );
        })}
      </div>
    );
  }
};

export default CreateEmails;