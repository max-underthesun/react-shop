import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, NavLink
} from 'react-router-dom';

import routes from 'routes';

import { mainPath, contactsPath, productPath } from 'helpers/routes';


const RouteWithSubroutes = (route, key) => (
  React.createElement(Route, { ...route, key })
);

const App = () => (
  <Router>
    <div>
      <ul>
        <li><NavLink exact to={mainPath()}>Main</NavLink></li>
        <li><NavLink to={productPath(1)}>Product #1</NavLink></li>
        {/* <li><NavLink exact to={cartPath()}>Cart</NavLink></li> */}
        <li><NavLink to={contactsPath()}>Contacts</NavLink></li>
      </ul>
      <Switch>
        {routes.map((route, key) => RouteWithSubroutes(route, key))}
      </Switch>
    </div>
  </Router>
);

export default App;
