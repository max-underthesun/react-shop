import React from 'react';
import PropTypes from 'prop-types';
import request from 'superagent';

import { PRODUCTS } from 'constants/Products';
import Product from 'components/views/Product';

class ProductPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      image: 0
    };

    this.chooseImage = this.chooseImage.bind(this);
  }

  componentDidMount() {
    this.fetchProduct(this.props.id);
  }

  fetchProduct(id) {
    // this.setState({ product: PRODUCTS.find((product) => (product.id == id)) });
    // this.setState({ products: PRODUCTS });
    request
      .get(`http://localhost:3333/products/${id}`)
      .then((res) => this.setState({ product: res.body }));
      // .then((res) => console.log(res.body));
  }

  chooseImage(index) {
    // console.log(index);
    this.setState({ image: index });

  }

  render() {
    const { product, image } = this.state;
    return (
      <Product product={ product } image={ image } onClick={ this.chooseImage } />
    );
  }
}

ProductPageContainer.propTypes = {
  id: PropTypes.string.isRequired
};


export default ProductPageContainer;
