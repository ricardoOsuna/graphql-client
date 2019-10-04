import gql from 'graphql-tag';

export const CREATE_CLIENT = gql`
mutation CreateClient($input: CreateClientInput) {
  createClient(input: $input) {
    firstName
    lastName
    age
    birthdate
    company
    status
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
mutation UpdateClient($input: UpdateClientInput) {
  updateClient(input: $input) {
    firstName
    lastName
    age
    birthdate
    company
    status
  }
}`;

export const CHANGE_STATUS_CLIENT = gql`
mutation ChangeStatusClient($input: UpdateClientInput) {
  updateClient(input: $input) {
    _id
    status
  }
}`;

export const DESTROY_CLIENT = gql`
mutation DestroyClient($_id: ID!) {
  destroyClient(_id: $_id) {
    _id
    deletedAt
  }
}`;