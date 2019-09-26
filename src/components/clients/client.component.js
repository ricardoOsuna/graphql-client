import React, { Component, Fragment} from 'react'
import moment from 'moment';

class Client extends Component {
  componentWillMount() {
    if (this.props.client) {
      this.setState({
        ...this.props.client,
        birthdate: moment(this.props.birthdate).format('DD/MM/YYYY'),
      });
    }
  }

  state = {
    firstName: '',
    lastName: '',
    birthdate: '',
    age: 0,
    company: '',
    status: 1,
  }

  setClient = (e, field) => {
    let data = this.state;
    data[`${field}`] = e.target.value;
    this.setState(data);
    localStorage.setItem('client', JSON.stringify(data));
  };

  render() {
    const { firstName, lastName, birthdate, age, company, status } = this.state;
    return (
      <Fragment>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>First Name</label>
            <input type="text"
              className="form-control"
              placeholder="First Name"
              defaultValue={firstName}
              autoFocus
              required
              onChange={ e => this.setClient(e, 'firstName') }/>
          </div>
          <div className="form-group col-md-6">
            <label>Last Name</label>
            <input type="text"
              className="form-control"
              placeholder="Last Name"
              defaultValue={lastName}
              required
              onChange={ e => this.setClient(e, 'lastName') }/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Birthdate</label>
            <input type="date"
              className="form-control"
              placeholder="Birthdate"
              defaultValue={birthdate}
              onChange={ e => this.setClient(e, 'birthdate') }/>
          </div>
          <div className="form-group col-md-6">
            <label>Age</label>
            <input type="number"
              className="form-control"
              placeholder="Age"
              defaultValue={age}
              onChange={ e => this.setClient(e, 'age') }/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Company</label>
            <input type="text"
              className="form-control"
              placeholder="Company"
              defaultValue={company}
              required
              onChange={ e => this.setClient(e, 'company') }/>
          </div>
          <div className="form-group col-md-6">
            <label>Status</label>
            <select className="form-control"
              onChange={ e => this.setClient(e, 'status') }>
              <option value="1" selected={parseInt(status)}>ENABLED</option>
              <option value="0" selected={!parseInt(status)}>DISABLED</option>
            </select>
          </div>
        </div>
      </Fragment>
    );
  };
}

export default Client;