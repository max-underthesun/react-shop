import React from 'react';
import PropTypes from 'prop-types';
import contextCart from 'context/contextCart';

const buttonStyle = {
  minWidth: '20%',
  minHeight: '40px'
};

const buttonContainerStyle = {
  textAlign: 'right'
};

const CartButton = () => (
  <contextCart.Consumer>
    {
      ({ products }) => (
        <div style={ buttonContainerStyle }>
          <button style={ buttonStyle }>
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
