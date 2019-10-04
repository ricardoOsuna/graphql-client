import gql from 'graphql-tag';

export const GET_CLIENTS = gql `
query GetClients($limit: Int, $offset: Int) {
  getClients(limit: $limit, offset: $offset) {
    _id
    firstName
    lastName
    age
    birthdate
    company
    status
  }
  countClients
}`;

export const GET_CLIENT = gql `
query GetClient($_id: ID!) {
  getClient(_id: $_id) {
    _id
    firstName
    lastName
    age
    birthdate
    company
    status
    createdAt
  }
}`;