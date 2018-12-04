import React from 'react';

import { PRODUCTS } from 'constants/Products';
import Catalog from 'components/views/Main';
import contextCart from 'context/contextCart';

class CatalogPageContainer extends React.Component {
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
    this.setState((state) => ({ cart: [...state.cart, product] }));
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

export default CatalogPageContainer;

