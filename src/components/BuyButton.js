import React from 'react';
import PropTypes from 'prop-types';

import contextCart from 'context/contextCart';

const styleBuyButton = {
  minWidth: '60px',
  minHeight: '30px'
};

const BuyButton = ({ product }) => (
  <contextCart.Consumer>
    {
      ({ addProduct }) => (
        <button onClick={ () => addProduct(product) } style={ styleBuyButton }>
          Add to Cart
        </button>
      )
    }
  </contextCart.Consumer>
);

BuyButton.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string.isRequired
  })
  // product: PropTypes.shape({
  //   ...ProductCard.propTypes,
  //   id: PropTypes.string.isRequired
  // })
};


export default BuyButton;
