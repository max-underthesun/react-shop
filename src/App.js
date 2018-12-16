import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, NavLink
} from 'react-router-dom';

import routes from 'routes';
import { mainPath, contactsPath, productPath } from 'helpers/routes';
// import { PRODUCTS } from 'constants/Products';
import contextCart from 'context/contextCart';

const RouteWithSubroutes = (route, key) => (
  React.createElement(Route, { ...route, key })
);

class AppPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // products: [],
      cart: []
    };
    this.addProduct = this.addProduct.bind(this);
  }

  // componentDidMount() {
  //   this.fetchProducts();
  // }

  // fetchProducts() {
  //   this.setState({ products: PRODUCTS });
  // }

  addProduct(product) {
    this.setState((state) => ({ cart: [...state.cart, product] }));
  }

  render() {
    // const { products, cart } = this.state;
    const { cart } = this.state;
    return (
      <contextCart.Provider value={{ cart, addProduct: this.addProduct }}>
        {/* <Catalog products={products} /> */}
        <Router>
          <div style={{ backgroundColor: '#bbb' }}>
            <ul>
              <li><NavLink exact to={mainPath()}>Main</NavLink></li>
              <li><NavLink to={productPath(1)}>Product #1</NavLink></li>
              <li><NavLink to={contactsPath()}>Contacts</NavLink></li>
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
  // <Router>
  //   <div style={ { backgroundColor: '#bbb' } }>
  //     <ul>
  //       <li><NavLink exact to={mainPath()}>Main</NavLink></li>
  //       <li><NavLink to={productPath(1)}>Product #1</NavLink></li>
  //       <li><NavLink to={contactsPath()}>Contacts</NavLink></li>
  //     </ul>
  //     <Switch>
  //       {routes.map((route, key) => RouteWithSubroutes(route, key))}
  //     </Switch>
  //   </div>
  // </Router>
);

// const App = () => (
//   <Router>
//     <div style={ { backgroundColor: '#bbb' } }>
//       <ul>
//         <li><NavLink exact to={mainPath()}>Main</NavLink></li>
//         <li><NavLink to={productPath(1)}>Product #1</NavLink></li>
//         <li><NavLink to={contactsPath()}>Contacts</NavLink></li>
//       </ul>
//       <Switch>
//         {routes.map((route, key) => RouteWithSubroutes(route, key))}
//       </Switch>
//     </div>
//   </Router>
// );

export default App;
