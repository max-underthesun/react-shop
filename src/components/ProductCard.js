import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/Image';
import TextBox from 'components/TextBox';
import Price from 'components/Price';
import BuyFormContainer from 'containers/BuyFormContainer';

const productCardStyle = {
  width: 'inherit',
  border: '1px solid gray',
  margin: '2px'
};

const productCardCulumnStyle = {
  width: '40%',
  display: 'inline-block',
  margin: '40px'
};

const ProductCard = (product) => {
  const { imageUrl, title, price } = product;
  return (
    <div style={ productCardStyle }>
      <div style={ productCardCulumnStyle }>
        <Image src={ imageUrl }></Image>
        <TextBox text={ title }></TextBox>
      </div>
      <div style={ productCardCulumnStyle }>
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
