import gql from 'graphql-tag';

export const GET_EMAILS_BY_CLIENT = gql `
query GetEmailsByClient($clientId: ID) {
  getEmailsByClient(clientId: $clientId) {
    email
    reference
    default
  }
}`;