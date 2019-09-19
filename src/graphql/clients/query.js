import gql from 'graphql-tag';

export const GET_CLIENTS = gql `{
  getClients {
    _id
    firstName
    lastName
    age
    birthdate
    company
    status
  }
}`