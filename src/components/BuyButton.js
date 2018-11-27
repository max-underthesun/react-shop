import React from 'react';
import PropTypes from 'prop-types';

import contextCart from 'context/contextCart';

const styleBuyButton = {
  minWidth: '60px',
  minHeight: '30px'
};

class BuyButton extends React.Component {
  constructor(props) {
    super(props);
  }

  addProduct(products, product) {
    products.push(product);
  }

  render() {
    const { product } = this.props;
    return (
      <contextCart.Consumer>
        {
          ({ products }) => (
            <button onClick={ () => this.addProduct(products, product) } style={ styleBuyButton }>
              Add to Cart
            </button>
          )
        }
      </contextCart.Consumer>    );
  }
}

BuyButton.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string.isRequired
  })
};

export default BuyButton;
