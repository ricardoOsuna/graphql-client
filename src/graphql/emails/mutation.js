import gql from 'graphql-tag';

export const CREATE_EMAIL = gql`
mutation CreateEmail($input: CreateEmailInput) {
  createEmail(input: $input) {
    _id
    email
    reference
    default
  }
}`;

export const UPDATE_EMAIL = gql`
mutation UpdateEmail($input: UpdateItemInput) {
  updateEmail(input: $input) {
    _id
    email
    reference
    default
  }
}`;