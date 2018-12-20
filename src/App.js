import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, NavLink
} from 'react-router-dom';

import routes from 'routes';
// import { mainPath, contactsPath, productPath } from 'helpers/routes';
import { mainPath, contactsPath } from 'helpers/routes';
import contextCart from 'context/contextCart';

const RouteWithSubroutes = (route, key) => (
  React.createElement(Route, { ...route, key })
);

class AppPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(product) {
    this.setState((state) => ({ cart: [...state.cart, product] }));
  }

  render() {
    const { cart } = this.state;
    return (
      <contextCart.Provider value={{ cart, addProduct: this.addProduct }}>
        <Router>
          <div>
            <ul>
              <li><NavLink exact to={mainPath()}>Main</NavLink></li>
              {/* <li><NavLink to={productPath(1)}>Product #1</NavLink></li> */}
              <li><NavLink to={contactsPath()}>Contacts</NavLink></li>
              {/* <li><NavLink to={'/kuku'}>404</NavLink></li> */}
            </ul>
            <Switch>
              {routes.map((route, key) => RouteWithSubroutes(route, key))}
            </Switch>
          </div>
        </Router>
      </contextCart.Provider>
    );
  }
}

const App = () => (
  <AppPageContainer />
);

export default App;
