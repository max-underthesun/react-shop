import React from 'react';
import request from 'superagent';

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
    request
      .get('http://localhost:3333/products')
      .then((res) => this.setState({ products: res.body }));
  }

  render() {
    const { products } = this.state;
    return (
      <Catalog products={ products } />
    );
  }
}

export default CatalogPageContainer;
