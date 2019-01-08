import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Image from 'components/shared/elements/Image';
import TextBox from 'components/shared/elements/TextBox';
import Price from './elements/Price';
import BuyFormContainer from 'containers/BuyFormContainer';
import { productPath } from 'helpers/routes';

const productCardStyle = {
  width: 'inherit',
  border: '1px solid gray',
  margin: '2px'
};

const productCardColumnStyle = {
  width: '50%',
  display: 'inline-block',
  margin: '40px'
};

const productCardColumnStyle1 = {
  width: '30%',
  display: 'inline-block',
  margin: '40px'
};

const ProductCard = ({ image, title, price, id, displayBuyForm }) => (
  <div style={ productCardStyle }>
    <div style={ productCardColumnStyle }>
      <Link exact='true' to={productPath(id)}>
        <Image src={ image } />
      </Link>
      <TextBox text={ title } />
    </div>
    <div style={productCardColumnStyle1 }>
      <Price price={ price } />
      {
        displayBuyForm &&
          <BuyFormContainer
            product={{ image, title, price, id, displayBuyForm }}
          />
      }
    </div>
  </div>
);

ProductCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.number,
  displayBuyForm: PropTypes.bool
};

ProductCard.defaultProps = {
  displayBuyForm: true
};

export default ProductCard;
