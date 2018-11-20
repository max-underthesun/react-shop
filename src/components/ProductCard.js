import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/Image';
import TextBox from 'components/TextBox';
import Price from 'components/Price';

const ProductCard = ({ imageUrl, title, price }) => (
  <div>
    <Image src={ imageUrl }></Image>
    <TextBox text={ title }></TextBox>
    <Price price={ price }></Price>
  </div>
);

ProductCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number
};

export default ProductCard;
