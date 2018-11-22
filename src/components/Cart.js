import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({ number }) => (
  <div style={{ textAlign: 'right' }}>
    <button style={{ minWidth: '20%', minHeight: '40px' }}>
      Cart: { number }
    </button>
  </div>
);

Cart.propTypes = {
  number: PropTypes.number.isRequired
};

Cart.defaultProps = {
  number: 0
};

export default Cart;
