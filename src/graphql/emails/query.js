import gql from 'graphql-tag';

export const GET_EMAILS_BY_CLIETN = gql `
query getEmailsByClient($clientId: ID) {
  getEmailsByClient(clientId: $clientId) {
    email
    reference
  }
};`