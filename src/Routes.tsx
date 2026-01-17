/* eslint-disable import/no-extraneous-dependencies */
import { Switch, Route } from 'react-router-dom';

import { EditContact } from './page/EditContact';
import { Home } from './page/Home';
import { NewContact } from './page/NewContact';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" component={NewContact} />
      <Route path="/edit/:id" component={EditContact} />
    </Switch>
  );
}
