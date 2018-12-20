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
  width: '40%',
  display: 'inline-block',
  margin: '40px'
};

const ProductCard = (product) => {
  const { imageUrl, title, price, id } = product;
  return (
    <div style={ productCardStyle }>
      <div style={ productCardColumnStyle }>
        <Link exact='true' to={productPath(id)}>
          <Image src={imageUrl} />
        </Link>
        {/* <Image src={ imageUrl }></Image> */}
        <TextBox text={ title }></TextBox>
      </div>
      <div style={ productCardColumnStyle }>
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
