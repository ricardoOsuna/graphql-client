import { Mutation } from 'react-apollo';
import React, { Component, Fragment } from 'react';
import { CREATE_CLIENT } from '../../graphql/clients/mutation';

// Components
import Client from './client.component';

// Serviices
import { getClient } from '../../services/clients.service';

class CreateClient extends Component {
  render() {
    return (
      <Fragment>
        <h2 className="text-center">New Client</h2>
        <div className="row justify-content-center">
          <Mutation onError={ err =>  console.error(err) }
            onCompleted={res => {
              console.log(res);
              localStorage.removeItem('client');
              this.props.history.concat('/');
            }}
            mutation={CREATE_CLIENT}>
           { createClient => (
              <form className="col-md-8 m-3"
                onSubmit={ e => {
                  const input = getClient();
                  createClient({
                    variables: { input }
                  });
                }}>
                <Client
                  buttonName='Save'
                  createClient={true}
                  email={{ email: '', reference: '', default: 1 }}
                  phone={{ phone: '', reference: '', default: 1 }}
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