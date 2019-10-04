import React, { Fragment } from 'react';
import  { ApolloProvider } from 'react-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { BrowserRouter as Router } from 'react-router-dom';

// components
import Header from './components/header.component'
import Routes from './routes'

const client = new ApolloClient({
  uri: `http://localhost:${4000}/graphql`,
  cache: new InMemoryCache({ addTypename: false }),
  onError: ({ networkError, graphqlError }) => {
    console.error('networkError => ', networkError);
    console.error('graphqlError => ', graphqlError);
  }
});

function App() {
  return (
    <ApolloProvider client = { client }>
      <Router>
        <Fragment>
          <Header/>
          <Routes/>
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;