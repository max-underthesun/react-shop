import React from 'react';
import PropTypes from 'prop-types';
import contextCart from 'context/contextCart';

const CartButton = () => (
  <contextCart.Consumer>
    {
      ({ products }) => (
        <div style={{ textAlign: 'right' }}>
          <button style={{ minWidth: '20%', minHeight: '40px' }}>
            Cart: { products.length }
          </button>
        </div>
      )
    }
  </contextCart.Consumer>
);

CartButton.propTypes = {
  number: PropTypes.number.isRequired
};

CartButton.defaultProps = {
  number: 0
};

export default CartButton;
