import React from 'react';
import PropTypes from 'prop-types';

import BuyField from '../components/BuyField';
import BuyButton from 'components/BuyButton';

const BuyForm = ({ addProducts, disabled, getInput }) => (
  <div>
    <BuyField getInput={getInput} />
    <BuyButton addProducts={addProducts} disabled={disabled} />
  </div>
);

BuyForm.propTypes = {
  addProducts: PropTypes.func,
  getInput: PropTypes.func,
  disabled: PropTypes.bool
};

export default BuyForm;
