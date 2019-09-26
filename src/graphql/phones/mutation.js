import gql from 'graphql-tag';

export const CREATE_PHONE = gql`
mutation CreatePhone($input: CreatePhoneInput) {
  createPhone(input: $input) {
    _id
    phone
    reference
    default
  }
}`;

export const UPDATE_PHONE = gql`
mutation UpdatePhone($input: UpdateItemInput) {
  updatePhone(input: $input) {
    _id
    phone
    reference
    default
  }
}`;