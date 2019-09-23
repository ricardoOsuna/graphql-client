import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'

// GraphQL
import { GET_CLIENT } from '../../graphql/clients/query';

// Components
import Client from './client.component';

class UpdateClient extends Component {
  state = {
    error: {
      err: false,
      msg: undefined
    },
    success: {
      ok: false,
      msg: undefined
    },
  };

  render() {
    const { clientId } = this.props.match.params;
    return (
      <Fragment>
        <h2 className="text-center">Update Client</h2>
        <div className="row justify-content-center">
          <Query query={ GET_CLIENT } variables={ clientId }>
            {({ loading, error, data }) => {
              if (loading) return 'Loading...'
              if (error) return `Error: ${error.message}`
              return (
                <Client
                  client={data.getClient}
                />
              )
            }};
          </Query>
        </div>
      </Fragment>
    );
  };
};

export default UpdateClient;