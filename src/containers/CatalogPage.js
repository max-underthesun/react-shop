import React from 'react';

import { PRODUCTS } from 'constants/Products';

import Catalog from 'components/Catalog';

class CatalogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.setState({ products: PRODUCTS });
  }

  render() {
    const { products } = this.state;
    return <Catalog products={ products }></Catalog>;
  }
}

export default CatalogPage;

