import React from 'react';

import update from 'immutability-helper';


import { PRODUCTS } from 'constants/Products';
import Catalog from 'components/Catalog';
import contextCart from 'context/contextCart';

class CatalogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: []
    };
    this.addProduct = this.addProduct.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.setState({ products: PRODUCTS });
  }

  addProduct(product) {
    this.setState(update(this.state, { cart: { $push: [product] } }));
    // this.setState((state) => ({ cart: [...state.cart, product] }));
  }

  render() {
    const { products, cart } = this.state;
    return (
      <contextCart.Provider value={{ cart, addProduct: this.addProduct } }>
        <Catalog products={ products } />
      </contextCart.Provider>
    );
  }
}

export default CatalogPage;

