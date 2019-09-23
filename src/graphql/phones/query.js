import gql from 'graphql-tag';

export const GET_PHONES_BY_CLIETN = gql `
query getPhonesByClient($clientId: ID) {
  getPhonesByClient(clientId: $clientId) {
    phone
    reference
  }
};`