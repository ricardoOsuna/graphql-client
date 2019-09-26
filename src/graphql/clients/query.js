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

export const GET_CLIENT = gql `
query GetClient($id: ID) {
  getClient(_id: $id) {
    _id
    firstName
    lastName
    age
    birthdate
    company
    status
  }
}`;