import React, { Component, Fragment} from 'react'

// Components
import Item from '../item.component';

// Services
import { setClient } from '../../services/clients.service';

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
      message: undefined
    },
    success: {
      ok: false,
      message: undefined
    }
  };

  componentDidMount() {
    localStorage.setItem('client', JSON.stringify(this.state.client));
  }

  setItems = type => {
    const client = setClient('', '', type);
    this.setState({ client });
  }

  render() {
    // const { error, success } = this.state;
    const { createClient, client, buttonName } = this.props;

    if (createClient) {
      const { email, phone } = this.props;
      const { emails, phones } = this.state.client;
      emails.push(email);
      phones.push(phone);
    } else {
      this.setState({ client });
    }

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
              onChange={ e => setClient(e, 'firstName') }/>
          </div>
          <div className="form-group col-md-6">
            <label>Last Name</label>
            <input type="text"
              className="form-control"
              placeholder="Last Name"
              required
              onChange={ e => setClient(e, 'lastName') }/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Birthdate</label>
            <input type="date"
              className="form-control"
              placeholder="Birthdate"
              onChange={ e => setClient(e, 'birthdate') }/>
          </div>
          <div className="form-group col-md-6">
            <label>Age</label>
            <input type="number"
              className="form-control"
              placeholder="Age"
              onChange={ e => setClient(e, 'age') }/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Company</label>
            <input type="text"
              className="form-control"
              placeholder="Company"
              required={false}
              onChange={ e => setClient(e, 'company') }/>
          </div>
          <div className="form-group col-md-6">
            <label>Status</label>
            <select className="form-control"
              onChange={ e => setClient(e, 'status') }>
              <option value="1" selected>ENABLED</option>
              <option value="0">DISABLED</option>
            </select>
          </div>
        </div>

        { this.state.emails.map((item, index) => (
          <Item
            index={index}
            status={item.status}
            itemName='Email'
            inputType='email'
          />
        ))}

        <div className="form-group d-flex justify-content-center col-m-12">
          <button type="button"
            className="btn btn-info"
            onClick={ () => this.setItems('emails')}>
              New Email
            </button>
        </div>

        { this.state.phones.map((item, index) => (
          <Item
            index={index}
            status={item.status}
            itemName='Phone'
            inputType='number'
          />
        ))}

        <div className="form-group d-flex justify-content-center col-m-12">
          <button type="button"
            className="btn btn-info"
            onClick={ () => this.setItems('phones')}>
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