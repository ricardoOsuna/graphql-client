import { Query, Mutation } from 'react-apollo'
import React, { Component, Fragment } from 'react'

// GraphQL Query
import { GET_CLIENT } from '../../graphql/clients/query';
// import { GET_EMAILS_BY_CLIENT } from '../../graphql/emails/query';
// import { GET_EMAILS_BY_CLIENT } from '../../graphql/emails/query';

// GraphQL Mutation
import { UPDATE_CLIENT } from '../../graphql/clients/mutation';
// import { CREATE_EMAIL, UPDATE_EMAIL } from '../../graphql/emails/mutation';
// import { CREATE_PHONE, UPDATE_PHONE } from '../../graphql/phones/mutation';

// Components
import Client from './client.component';
// import CreateEmails from '../emails/create.emails.component';
// import CreatePhones from '../phones/create.phones.component';
import Loading from '../utils/loading.component';

class UpdateClient extends Component {
  state = {
    client: {},
    error: {
      err: false,
      msg: undefined
    },
    success: {
      ok: false,
      msg: undefined
    },
  };

  /**
   ** NOTE:
   *! Dont´t move the query beacause it´s the only correct way.
   * https://github.com/threepointone/react-ease/issues/4
   */
  render() {
    const { _id } = this.props.match.params;
    return (
      <Fragment>
        <h2 className="text-center">Update Client</h2>
        <div className="row justify-content-center">
          <Query query={GET_CLIENT} variables={{ _id }}>{
            ({ loading, error, data, refetch }) => {
              if (error) return `Error => ${error.message}`
              if (loading) return <Loading/>
              return (
                <Fragment>
                  {/* Client component */}
                  <Mutation mutation={UPDATE_CLIENT}
                    onError={ err => console.error(err)}
                    onCompleted={ () => refetch().then(() => this.props.history.push('/')) }>{
                      updateClient => (
                        <form className="col-md-9 mt-5"
                          onSubmit={ e => {
                            e.preventDefault();
                            updateClient({ variables: { input: JSON.parse(localStorage.getItem('client')) }})
                          }}>
                          <Client client={{ ...data.getClient, _id }} />
                          <div className="form-group d-flex justify-content-center bg-primary m-0 p-2 fixed-bottom">
                            <button type="submit" className="btn btn-success">Save Changes</button>
                          </div>
                        </form>
                      )
                    }
                  </Mutation>
                  {/* Get data for emails component */}
                  {/* <Query query={GET_EMAILS_BY_CLIENT} variables={{ clientId: _id }}>{
                    emails => {
                      if (emails.error) return `Error => ${emails.error.message}`;
                      if (emails.loading) return <Loading/>;
                      return (
                        <form className="col-md-9 mt-5">
                          <CreateEmails emails={emails.data.getEmailsByClient}/>
                          <div className="form-group d-flex justify-content-center bg-primary m-0 p-2 fixed-bottom">
                            <button type="submit" className="btn btn-success">Update emails</button>
                          </div>
                        </form>
                      )
                    }
                  // }</Query> */}
                  {/* Get data for phones component */}
                  {/* <Query query={GET_PHONES_BY_CLIENT} variables={{ clientId: _id }}>{
                    phones => {
                      if (phones.error) return `Error => ${phones.error.message}`;
                      if (phones.loading) return <Loading/>;
                      return (
                        <form className="col-md-9 mt-5">
                          <CreatePhones phones={phones.data.getPhonesByClient}/>
                        </form>
                      )
                    }
                  }</Query> */}
                </Fragment>
              );
            }
          }</Query>
        </div>
      </Fragment>
    );
  };
};

export default UpdateClient;