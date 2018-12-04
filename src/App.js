import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from 'routes';


const RouteWithSubroutes = (route, key) => (
  React.createElement(Route, { ...route, key })
);

const App = () => (
  <Router>
    <div>
      <Switch>
        {routes.map((route, key) => (RouteWithSubroutes(route, key)))}
      </Switch>
    </div>
  </Router>
);

export default App;
