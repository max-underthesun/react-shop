import React from 'react';
import request from 'superagent';

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
    // this.setState({ products: PRODUCTS });
    request
      .get('http://localhost:3333/products')
      .then((res) => this.setState({ products: res.body }));
      // .then((res) => console.log(res.body));
  }

  render() {
    const { products } = this.state;
    return (
      <Catalog products={ products } />
    );
  }
}

export default CatalogPageContainer;
