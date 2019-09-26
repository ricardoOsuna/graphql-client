import gql from 'graphql-tag';

export const GET_PHONES_BY_CLIENT = gql `
query GetPhonesByClient($clientId: ID) {
  getPhonesByClient(clientId: $clientId) {
    phone
    reference
    default
  }
}`;