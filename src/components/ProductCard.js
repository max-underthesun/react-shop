import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/Image';
import TextBox from 'components/TextBox';
import Price from 'components/Price';
import BuyButton from 'components/BuyButton';

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
        <BuyButton product={ product } />
      </div>
    </div>
  );
};


// const ProductCard = ({ imageUrl, title, price }) => (
//   <div style={ productCardStyle }>
//     <div style={{ width: '40%', display: 'inline-block', margin: '40px' }}>
//       <Image src={ imageUrl }></Image>
//       <TextBox text={ title }></TextBox>
//     </div>
//     <div style={{ width: '40%', display: 'inline-block', margin: '40px' }}>
//       <Price price={ price }></Price>
//       <BuyButton/>
//     </div>
//   </div>
// );

ProductCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number
};

export default ProductCard;
