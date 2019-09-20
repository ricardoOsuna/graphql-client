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
    },
  };

  componentDidMount() {
    localStorage.setItem('client', JSON.stringify(this.state.client));
  }

  setItems = type => {
    const client = setClient('', '', type);
    this.setState({ client });
  }

  removeItem = (item, index) => {
    let { client } = this.state;
    if (parseInt(client[item][index].default)) {
      console.log('the item is default option');
    } else {
      client[item] = client[item].filter((data, index2) => index2 !== index);
      this.setState({
        client
      });
    }
  };

  render() {
    let { client } = this.props;
    // const { error, success } = this.state;
    const { emails, phones } = this.state.client;
    const { createClient, buttonName } = this.props;

    if (createClient) {
      const { email, phone } = this.props;
      emails.push(email);
      phones.push(phone);
      client = this.state.client;
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
              <option value="1" selected={parseInt(client.status)}>ENABLED</option>
              <option value="0" selected={!parseInt(client.status)}>DISABLED</option>
            </select>
          </div>
        </div>

        { emails.map((item, index) => (
          <Item
            index={index}
            itemDefault={item.default}
            itemName='Email'
            inputType='email'
            removeItem={this.removeItem}
          />
        ))}

        <div className="form-group d-flex justify-content-center col-m-12">
          <button type="button"
            className="btn btn-warning"
            onClick={ () => this.setItems('emails')}>
              New Email
            </button>
        </div>

        { phones.map((item, index) => (
          <Item
            index={index}
            itemDefault={item.default}
            itemName='Phone'
            inputType='number'
            removeItem={this.removeItem}
          />
        ))}

        <div className="form-group d-flex justify-content-center col-m-12">
          <button type="button"
            className="btn btn-warning"
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