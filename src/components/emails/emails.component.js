import React, { Component, Fragment } from 'react'

// Components
import Item from '../item.component';

// Services
import { setItemServices, removeItemServices, addItemServices } from '../../services/items.service';

class Emails extends Component {
  state = {
    emails: this.props.emails,
  };

  addItems = () => {
    this.setState({ emails: addItemServices(this.state.emails, 'emails') });
  };

  setItems = (e, index, field) => {
    this.setState({ emails: setItemServices(e, index, field, this.state.emails, 'emails')});
  };

  removeItem = index => {
    this.setState({ emails: removeItemServices(index, this.state.emails, 'emails')});
  };

  render() {
    const { emails } = this.state;
    return (
      <Fragment>
        {/* TODO: */}
        { emails.map((item, index) => (
          <Item
            item={item}
            index={index}
            itemName='Email'
            setItems={this.setItems}
            removeItem={this.removeItem}
          />
        ))}

        <div className="form-group d-flex justify-content-center col-m-12">
          <button type="button"
            className="btn btn-warning"
            onClick={ () => this.addItems('emails')}>
              New Email
            </button>
        </div>
      </Fragment>
    );
  }
};

export default Emails;