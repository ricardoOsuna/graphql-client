import React, { Component, Fragment} from 'react'

// Components
import Item from '../item.component';

// Services
import {
  setClientService,
  removeItemservice,
  setItemService
} from '../../services/clients.service';

class Client extends Component {
  state = {
    client: {
      firstName: '',
      lastName: '',
      birthdate: '',
      age: 0,
      company: '',
      status: 1,
      emails: [],
      phones: [],
    },
    error: {
      err: false,
      msg: undefined
    },
    success: {
      ok: false,
      msg: undefined
    },
  };

  // Load data before render app
  componentWillMount() {
    let { client } = this.state;
    const { createClient } = this.props;
    const { emails, phones } = client;

    if (createClient) {
      const { email, phone } = this.props;
      emails.push(email);
      phones.push(phone);
    } else {
      client = this.props.client;
      this.setState({ client });
    }
    localStorage.setItem('client', JSON.stringify(client));
  }

  // Add any email/phone
  addItems = item => {
    this.setState({ client: setClientService('', '', item, this.state.client) });
  }

  // set any email/phone
  setItems = (e, index, field, item) => {
    if (field === 'default') {
      this.setState({ client: setItemService(e, index, field, item)});
    }
  }

  // Remove any email/phone
  removeItem = (item, index) => {
    this.setState(removeItemservice(this.state, item, index));
  }

  render() {
    const { buttonName } = this.props;
    const { emails, phones } = this.state.client;
    const { client, /*error, success*/ } = this.state;

    return(
      <Fragment>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>First Name</label>
            <input type="text"
              className="form-control"
              placeholder="First Name"
              autoFocus
              required
              onChange={ e => setClientService(e, 'firstName') }/>
          </div>
          <div className="form-group col-md-6">
            <label>Last Name</label>
            <input type="text"
              className="form-control"
              placeholder="Last Name"
              required
              onChange={ e => setClientService(e, 'lastName') }/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Birthdate</label>
            <input type="date"
              className="form-control"
              placeholder="Birthdate"
              onChange={ e => setClientService(e, 'birthdate') }/>
          </div>
          <div className="form-group col-md-6">
            <label>Age</label>
            <input type="number"
              className="form-control"
              placeholder="Age"
              onChange={ e => setClientService(e, 'age') }/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Company</label>
            <input type="text"
              className="form-control"
              placeholder="Company"
              required={false}
              onChange={ e => setClientService(e, 'company') }/>
          </div>
          <div className="form-group col-md-6">
            <label>Status</label>
            <select className="form-control"
              onChange={ e => setClientService(e, 'status') }>
              <option value="1" selected={parseInt(client.status)}>ENABLED</option>
              <option value="0" selected={!parseInt(client.status)}>DISABLED</option>
            </select>
          </div>
        </div>

        {/* TODO: */}
        { emails.map((item, index) => (
          <Item
            index={index}
            itemDefault={item.default}
            itemName='Email'
            inputType='email'
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

        {/* TODO: */}
        { phones.map((item, index) => (
          <Item
            index={index}
            itemDefault={item.default}
            itemName='Phone'
            inputType='number'
            setItems={this.setItems}
            removeItem={this.removeItem}
          />
        ))}

        <div className="form-group d-flex justify-content-center col-m-12">
          <button type="button"
            className="btn btn-warning"
            onClick={ () => this.addItems('phones')}>
              New Phone
            </button>
        </div>

        <div className="form-group d-flex justify-content-center col-m-12">
          <button type="submit"
            className="btn btn-success">{ buttonName }</button>
        </div>
      </Fragment>
    );
  };
};

export default Client;