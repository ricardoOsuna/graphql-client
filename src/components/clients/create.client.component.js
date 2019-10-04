import { Mutation } from 'react-apollo';
import React, { Component, Fragment } from 'react';

// GraphQL
import { CREATE_CLIENT } from '../../graphql/clients/mutation';

// Components
// import Modal from '../modal.component';
import Client from './client.component';
import CreateEmails from '../emails/create.emails.component';
import CreatePhones from '../phones/create.phones.component';

// Services
import { getClientService } from '../../services/clients.service';

class CreateClient extends Component {
  state = {
    client: {
      firstName: '',
      lastName: '',
      birthdate: '',
      age: 18,
      company: '',
      status: 1,
      emails: [{ email: '', reference: '', default: 1 }],
      phones: [{ phone: '', reference: '', default: 1 }],
    },
    openModal: false,
  };

  modalStatus = () => {
    this.setState({ openModal: !this.state.openModal})
  }

  render() {
    const { emails, phones } = this.state.client;
    return (
      <Fragment>
        <h2 className="text-center">New Client</h2>
        <div className="row justify-content-center">
          <Mutation mutation={CREATE_CLIENT}
            onError={ err => console.error(err) }
            onCompleted={ () => {
              localStorage.removeItem('client');
              this.props.history.push('/');
            }}>
            { createClient => (
              <form className="col-md-10 m-5"
                onSubmit={ e => {
                  e.preventDefault();
                  console.log('getClientService => ', getClientService());
                  createClient({
                    variables: { input: getClientService() }
                  });
                }}>
                <h3 className="text-center">General Information</h3>
                <Client
                  client={this.state.client}
                />
                <h3 className="text-center">Contact Information</h3>
                <CreateEmails
                  emails={emails}
                />
                <CreatePhones
                  phones={phones}
                />
                <div className="form-group d-flex justify-content-center bg-primary m-0 p-2 fixed-bottom">
                  <button type="submit" className="btn btn-success">Save</button>
                </div>
                {/* <Modal modalId='createClient'
                  title='Create A New Client'
                  message='Are you sure to create a new client?'
                  btnMessage='Save Changes'
                  modalStatus={this.modalStatus} /> */}
              </form>
            )}
          </Mutation>
        </div>
      </Fragment>
    );
  };
};

export default CreateClient;