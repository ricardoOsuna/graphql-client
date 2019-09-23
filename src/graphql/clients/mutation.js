import gql from 'graphql-tag';

export const CREATE_CLIENT = gql`
mutation createClient($input: CreateClientInput) {
  createClient(input: $input) {
    firstName
    lastName
    age
    birthdate
    company
    status
    emails
    phones
  }
}`;

export const UPDATE_CLIENT = gql`
mutation updateClient($input: updateClientInput) {
  updateClient(input: $input) {
    firstName
    lastName
    age
    birthdate
    company
    status
  }
}`;