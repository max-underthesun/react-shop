import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, NavLink
} from 'react-router-dom';

import routes from 'routes';
import { mainPath, contactsPath } from 'helpers/routes';
import CartContainer from 'containers/CartContainer';

const RouteWithSubroutes = (route, key) => (
  React.createElement(Route, { ...route, key })
);

const App = () => (
  <CartContainer>
    <Router>
      <div>
        <ul>
          <li><NavLink exact to={mainPath()}>Main</NavLink></li>
          <li><NavLink to={contactsPath()}>Contacts</NavLink></li>
        </ul>
        <Switch>
          {routes.map((route, key) => RouteWithSubroutes(route, key))}
        </Switch>
      </div>
    </Router>
  </CartContainer>
);

export default App;
