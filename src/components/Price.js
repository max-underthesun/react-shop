import React from 'react';
import PropTypes from 'prop-types';
import { priceFormattedDollars } from 'helpers/formatters';

const priceStyle = {
  fontSize: '2em',
  marginBottom: '30px'
};

const Price = ({ price }) => (
  <div style={ priceStyle }>
    { priceFormattedDollars(price) }
  </div>
);

Price.propTypes = {
  price: PropTypes.number
};

export default Price;
