import React from 'react';
import PropTypes from 'prop-types';

const styleBuyButton = {
  minWidth: '60px',
  minHeight: '25px'
};

const BuyField = ({ getInput }) => (
  <input onChange={(e) => getInput(e.target.value)} style={styleBuyButton} />
);

BuyField.propTypes = {
  getInput: PropTypes.func
};

export default BuyField;
