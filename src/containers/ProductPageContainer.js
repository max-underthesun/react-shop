import React from 'react';

import { PRODUCTS } from 'constants/Products';
import Product from 'components/views/Product';

class ProductPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {}
    };
  }

  componentDidMount() {
    this.fetchProduct(this.props.id);
  }

  fetchProduct(id) {
    this.setState({ product: PRODUCTS.find((product) => (product.id == id)) });
  }

  render() {
    const { product } = this.state;
    return (
      <Product product={product} />
    );
  }
}

export default ProductPageContainer;
