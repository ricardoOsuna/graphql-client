import React from 'react'
import { Switch, Route } from 'react-router-dom'

/**
 * Components
 */
// clients
import IndexClient from './components/clients/index.client.component';
import CreateClient from './components/clients/create.client.component';
import UpdateClient from './components/clients/update.client.component';

const Routes = () => (
  <div className="container">
    <Switch>
      {/* Main */}
      <Route exact path="/" component={IndexClient} />

      {/* Clients */}
      <Route exact path="/clients" component={IndexClient} />
      <Route exact path="/clients/new" component={CreateClient} />
      <Route exact path="/clients/edit/:id" component={UpdateClient} />
    </Switch>
  </div>
);

export default Routes;