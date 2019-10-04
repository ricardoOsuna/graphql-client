import moment from 'moment';
import { Query, Mutation } from 'react-apollo';
import React, { Component, Fragment } from 'react';

// GraphQL Query
import { GET_CLIENTS } from '../../graphql/clients/query'
// Graphql Mutations
import { CHANGE_STATUS_CLIENT, DESTROY_CLIENT } from '../../graphql/clients/mutation';

// Components
import Loading from '../utils/loading.component';
import Paginator from '../utils/paginator.component';
import { ButtonToolbar, Dropdown, SplitButton } from 'react-bootstrap';

class IndexClient extends Component {
  state = {
    page: 1,
    limit: 10,
    offset: 0
  }

  previousPage = () => {
    const { page, limit, offset } = this.state;
    if (page - 1 >= 1) {
      this.setState({ page: page - 1, offset: offset - limit });
    }
  }

  nextPage = pages => {
    const { page, limit, offset } = this.state;
    if (page + 1 <= pages) {
      this.setState({ page: page + 1, offset: offset + limit });
    }
  };

  changePage = (page, pages) => {
    // if (page >= 1 && page <= pages) {
    //   this.setState({ page, offset: (page - 1) * this.state.limit });
    // }
  };
  // TODO: Find how to use 'refetchQueries'
  render() {
    const { limit, offset } = this.state;
    return(
      <Query query={ GET_CLIENTS } variables={{limit, offset}}>{
        ({ loading, error, data }) => {
          if (error) return `Error: ${error.message}`
          if (loading) return <Loading/>
          const pages = Math.ceil(data.countClients / this.state.limit);
          return (
            <Fragment>
              <h2 className="text-center">Client List</h2>
              <div className="table-responsive-sm mt-5 pb-5">
                <table className="table table-hover">
                  <thead className="thead-dark font-weight-bold">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Birthdate</th>
                      <th scope="col">Company</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    { data.getClients.map(({ _id, firstName, lastName, birthdate, company, status }, index) => (
                      <tr className={!status ? 'bg-secondary' : ''}
                        onDoubleClick={() => this.props.history.push(`/clients/edit/${_id}`)}>
                        <td>{index + 1}</td>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{moment(birthdate).format('DD/MM/YYYY')}</td>
                        <td>{company}</td>
                        <td>
                          <ButtonToolbar>
                            <SplitButton title="Update"
                              variant={status ? 'info' : 'dark'}
                              onClick={ () => this.props.history.push(`/clients/edit/${_id}`)}>
                              <Mutation mutation={CHANGE_STATUS_CLIENT}
                                onError={ err => console.error(err) }>{
                                changeStatus => (
                                  <Dropdown.Item onClick={ () =>
                                    changeStatus({ variables: { input: { ...data.getClients[index], status: status ? 0 : 1 }}})
                                  }>
                                    {status ? 'Disable' : 'Enable'}
                                  </Dropdown.Item>
                                )
                              }</Mutation>

                              <Mutation mutation={DESTROY_CLIENT}
                                onError={ err => console.error(err)}>{
                                destroyClient => (
                                  <Dropdown.Item onClick={ () => destroyClient({ variables: { _id }})}>
                                    Delete
                                  </Dropdown.Item>
                                )
                              }</Mutation>
                            </SplitButton>
                          </ButtonToolbar>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Paginator
                pages={pages}
                page={this.state.page}
                previousPage={this.previousPage}
                nextPage={this.nextPage}
                changePage={this.changePage}
              />
            </Fragment>
          )
        }
      }</Query>
    )
  }
}

export default IndexClient;