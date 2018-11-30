import React from 'react';
import PropTypes from 'prop-types';

const styleBuyButton = {
  minWidth: '60px',
  minHeight: '25px'
};

const BuyField = ({ getInput, value }) => (
  <input
    onChange={(e) => getInput(e.target.value)}
    style={styleBuyButton}
    value={value}
  />
);

BuyField.propTypes = {
  getInput: PropTypes.func,
  value: PropTypes.number
};

export default BuyField;
