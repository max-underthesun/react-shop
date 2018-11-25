import React from 'react';

import { PRODUCTS } from 'constants/Products';
import Catalog from 'components/Catalog';
import contextCart from 'context/contextCart';

class CatalogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: {
        products: []
      }
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.setState({ products: PRODUCTS });
  }

  render() {
    const { products, cart } = this.state;
    return (
      <contextCart.Provider value={ cart }>
        <Catalog products={ products } />
      </contextCart.Provider>
    );
  }
}

export default CatalogPage;

