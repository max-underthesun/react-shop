import React from 'react';

import { PRODUCTS } from 'constants/Products';
import Catalog from 'components/views/Main';

class CatalogPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.setState({ products: PRODUCTS });
  }

  render() {
    const { products } = this.state;
    return (
      <Catalog products={ products } />
    );
  }
}

export default CatalogPageContainer;
