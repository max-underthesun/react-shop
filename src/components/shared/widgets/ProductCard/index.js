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

const ProductCard = (product) => {
  const { images, title, price, id } = product;
  return (
    <div style={ productCardStyle }>
      <div style={ productCardColumnStyle }>
        <Link exact='true' to={productPath(id)}>
          <Image src={images[0]} />
        </Link>
        <TextBox text={ title }></TextBox>
      </div>
      <div style={productCardColumnStyle1 }>
        <Price price={ price }></Price>
        <BuyFormContainer product={ product } />
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number
};

export default ProductCard;
