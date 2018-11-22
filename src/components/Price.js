import React from 'react';
import PropTypes from 'prop-types';
import { priceFormattedDollars } from 'helpers/formatters';

const Price = ({ price }) => (
  <div style={{ fontSize: '2em', marginBottom: '30px' }}>
    { priceFormattedDollars(price) }
  </div>
);

Price.propTypes = {
  price: PropTypes.number
};

export default Price;
