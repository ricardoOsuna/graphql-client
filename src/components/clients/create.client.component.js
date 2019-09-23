import { Mutation } from 'react-apollo';
import React, { Component, Fragment } from 'react';

// GraphQL
import { CREATE_CLIENT } from '../../graphql/clients/mutation';

// Components
import Client from './client.component';
import Emails from '../emails/emails.component';
import Phones from '../phones/phones.component';
import ButtonSubmit from '../button.submit.component';

// Services
import {
  getClientService
} from '../../services/clients.service';

class CreateClient extends Component {
  state = {
    client: {
      firstName: '',
      lastName: '',
      birthdate: '',
      age: 0,
      company: '',
      status: 1,
      emails: [{ email: '', reference: '', default: 1 }],
      phones: [{ phone: '', reference: '', default: 1 }],
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

  componentDidMount() {
    localStorage.setItem('client', JSON.stringify(this.state.client));
  };

  // Show any message of error or success response
  showMessage = () => {
    const { error, success } = this.state;

    let alertType, alertMessage;
    if (error.err) {
      alertType = 'btn-danger';
      alertMessage = error.msg;
    } else if (success.ok) {
      alertType = 'btn-info';
      alertMessage = success.msg;
    }

    return (error.er || success.ok) ? <p className={`alert ${alertType} p-3 text-center`}>{alertMessage}</p> : '';
  };

  render() {
    const { client } = this.state;
    return (
      <Fragment>
        <h2 className="text-center">New Client</h2>
        {/* { this.showMessage } */}
        <div className="row justify-content-center">
          <Mutation onError={ err => console.error(err) }
            onCompleted={ res => {
              localStorage.removeItem('client');
              this.props.history.concat('/');
            }}
            mutation={CREATE_CLIENT}>
           { createClient => (
              <form className="col-md-8 m-3" onSubmit={ e => {
                  e.preventDefault();
                  const input = getClientService();
                  console.log('client => ', input);
                  createClient({
                    variables: { input }
                  });
                }}>
                <Client
                  client={client}
                />
                <Emails
                  emails={client.emails}
                />
                <Phones
                  phones={client.phones}
                />
                <ButtonSubmit
                  status='btn-success'
                  text='Save'
                />
              </form>
            )}
          </Mutation>
        </div>
      </Fragment>
    );
  };
};

export default CreateClient;