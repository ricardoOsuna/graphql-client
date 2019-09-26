import gql from 'graphql-tag';

export const CREATE_CLIENT = gql`
mutation CreateClient($input: CreateClientInput) {
  createClient(input: $input) {
    firstName
    lastName
    age
    birthdate
    company
    emails {
      email
      reference
      default
    }
    phones {
      phone
      reference
      default
    }
  }
}`;

export const UPDATE_CLIENT = gql`
mutation UpdateClient($input: updateClientInput) {
  updateClient(input: $input) {
    firstName
    lastName
    age
    birthdate
    company
    status
  }
}`;