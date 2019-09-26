import { Query, Mutation } from 'react-apollo'
import React, { Component, Fragment } from 'react'

// GraphQL
import { GET_CLIENT } from '../../graphql/clients/query';
import { GET_EMAILS_BY_CLIENT } from '../../graphql/emails/query';
import { GET_PHONES_BY_CLIENT } from '../../graphql/phones/query';

// Components
import Client from './client.component';
import Emails from '../emails/emails.component';
import Phones from '../phones/phones.component';
import ButtonSubmit from '../button.submit.component';
import { UPDATE_CLIENT } from '../../graphql/clients/mutation';

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
    const { id } = this.props.match.params;
    return (
      <Fragment>
        <h2 className="text-center">Update Client</h2>
        <div className="row justify-content-center">
          <Query query={GET_CLIENT} variables={{ id }}>{
            ({ loading, error, data }) => {
              if (loading) return 'Loading...'
              if (error) return `Error => ${error.message}`
              return (
                <Fragment>
                  {/* Client component */}
                  <Mutation mutation={UPDATE_CLIENT}
                    onError={ err => console.error(err)}
                    onCompleted={ res => console.log(res)}>{
                      updateClient => (
                        <form className="col-md-10 mt-5"
                          onSubmit={ e => {
                            e.preventDefault();
                            updateClient({
                              variables: { input: JSON.parse(localStorage.getItem('client'))}
                            })
                          }}>
                          <Client client={data.getClient} />
                        </form>
                      )
                    }
                  </Mutation>
                  {/* Get data for emails component */}
                  <Query query={GET_EMAILS_BY_CLIENT} variables={{ clientId: id }}>{
                    emails => {
                      if (emails.loading) return 'Loading...';
                      if (emails.error) return `Error => ${emails.error.message}`;
                      return (
                        <form className="col-md-10 mt-5">
                          <Emails emails={emails.data.getEmailsByClient}/>
                        </form>
                      )
                    }
                  }</Query>
                  {/* Get data for phones component */}
                  <Query query={GET_PHONES_BY_CLIENT} variables={{ clientId: id }}>{
                    phones => {
                      if (phones.loading) return 'Loading...';
                      if (phones.error) return `Error => ${phones.error.message}`;
                      return (
                        <form className="col-md-10 mt-5">
                          <Phones phones={phones.data.getPhonesByClient}/>
                        </form>
                      )
                    }
                  }</Query>
                  {/* <ButtonSubmit status='btn-success' text='Save'/> */}
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