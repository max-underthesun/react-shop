import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/Image';
import TextBox from 'components/TextBox';
import Price from 'components/Price';

const ProductCard = (props) => (
  <div>
    <Image src={ props.imageUrl }></Image>
    <TextBox text={ props.title }></TextBox>
    <Price price={ props.price }></Price>
  </div>
);

ProductCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number
};

export default ProductCard;
