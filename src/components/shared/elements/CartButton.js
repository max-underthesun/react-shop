import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import contextCart from 'context/contextCart';
import { cartPath } from 'helpers/routes';


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
      ({ cart }) => (
        <div style={ buttonContainerStyle }>
          <button style={buttonStyle}>
            <Link exact='true' to={cartPath()}>Cart: {cart.length}</Link>
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
