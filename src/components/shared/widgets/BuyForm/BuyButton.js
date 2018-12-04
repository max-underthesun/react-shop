import React from 'react';
import PropTypes from 'prop-types';

const styleBuyButton = {
  minWidth: '60px',
  minHeight: '30px'
};

const BuyButton = ({ addProducts, disabled }) => (
  <button onClick={addProducts} style={styleBuyButton} disabled={disabled}>
    Add to Cart
  </button>
);

BuyButton.propTypes = {
  addProducts: PropTypes.func,
  disabled: PropTypes.bool
};

export default BuyButton;
