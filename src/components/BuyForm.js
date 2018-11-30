import React from 'react';
import PropTypes from 'prop-types';

import BuyField from '../components/BuyField';
import BuyButton from 'components/BuyButton';

const BuyForm = ({ addProducts, disabled, getInput, inputValue }) => (
  <div>
    <BuyField getInput={getInput} value={inputValue} />
    <BuyButton addProducts={addProducts} disabled={disabled} />
  </div>
);

BuyForm.propTypes = {
  addProducts: PropTypes.func,
  getInput: PropTypes.func,
  inputValue: PropTypes.number,
  disabled: PropTypes.bool
};

export default BuyForm;
