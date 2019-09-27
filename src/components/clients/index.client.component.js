import moment from 'moment';
import { Query } from 'react-apollo';
import { Dropdown } from 'react-bootstrap'
import React, { Component, Fragment } from 'react';

// GraphQL
import { GET_CLIENTS } from '../../graphql/clients/query'

// Components
import Loading from '../loading.component';

class IndexClient extends Component {
  render() {
    return(
      <Query query = { GET_CLIENTS }>
        { ({ loading, error, data }) => {
          if (error) return `Error: ${error.message}`
          if (loading) return <Loading/>
          return (
            <Fragment>
              <h2 className="text-center">Client List</h2>
              <div className="table-responsive-sm mt-5">
                <table className="table table-hover">
                  <thead className="thead-dark font-weight-bold">
                    <tr>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Birthdate</th>
                      <th scope="col">Company</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.getClients.map(({ _id ,firstName, lastName, birthdate, company }) => (
                      <tr onDoubleClick={() => this.props.history.push(`/clients/edit/${_id}`)}>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{moment(birthdate).format('DD/MM/YYYY')}</td>
                        <td>{company}</td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                              Actions
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item variant="success">Enabled</Dropdown.Item>
                              <Dropdown.Item variant="warning">Disabled</Dropdown.Item>
                              <Dropdown.Item variant="danger">Delete</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export default IndexClient;