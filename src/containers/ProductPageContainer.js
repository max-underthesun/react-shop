import React from 'react';
import PropTypes from 'prop-types';
import request from 'superagent';

import Product from 'components/views/Product';
import { SERVER_URL } from 'constants/ServerUrl';

class ProductPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      imageIndex: 0
    };

    this.chooseImage = this.chooseImage.bind(this);
  }

  componentDidMount() {
    this.fetchProduct(this.props.id);
  }

  fetchProduct(id) {
    request
      .get(`${SERVER_URL}/products/${id}`)
      .then((res) => this.setState({ product: res.body }));
  }

  chooseImage(index) {
    this.setState({ imageIndex: index });
  }

  render() {
    const { product, imageIndex } = this.state;
    return (
      <Product
        product={product}
        imageIndex={ imageIndex }
        onClick={ this.chooseImage }
      />
    );
  }
}

ProductPageContainer.propTypes = {
  id: PropTypes.string.isRequired
};


export default ProductPageContainer;
