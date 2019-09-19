import React, { Fragment } from 'react'
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

import { GET_CLIENTS } from '../../graphql/clients/query'

const IndexClient = () => (
  <Query query = { GET_CLIENTS }>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error: ${error.message}`
      return (
        <Fragment>
          <h2 className="text-center">Client List</h2>
          <ul className="list-group">
            {data.getClients.map(client => (
              <li key={client._id} className="list-group-item">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-8 d-flex justify-content-between align-items-center">
                    {client.firstName} {client.lastName}: {client.company}
                  </div>
                  <div className="col-md-4 d-flex justify-content-end">
                    <div className="btn btn-success d-block d-md-inline-block">
                      <Link to={`/clients/edit/${client._id}`}>Modify</Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Fragment>
      )
    }}
  </Query>
);

export default IndexClient;