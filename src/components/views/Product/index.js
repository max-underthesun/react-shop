import React from 'react';
import PropTypes from 'prop-types';

import CartButton from 'components/shared/elements/CartButton';
import Image from 'components/shared/elements/Image';
import TextBox from 'components/shared/elements/TextBox';
import Price from 'components/shared/widgets/ProductCard/elements/Price';
import BuyFormContainer from 'containers/BuyFormContainer';


const catalogStyle = {
  width: '50%',
  marginLeft: '25%',
  marginRight: '25%'
};

const listStyle = {
  listStyle: 'none'
};

const itemStyle = {
  width: 'inherit'
};

const productCardStyle = {
  width: 'inherit',
  border: '1px solid gray',
  margin: '2px'
};

const productCardColumnStyle = {
  width: '90%',
  display: 'inline-block',
  margin: '40px'
};

const galleryStyle = { display: 'inline-block', marginRight: '5px' };

const Product = ({ product, imageIndex, onClick }) => (
  <div style={catalogStyle}>
    <CartButton />
    <ul style={listStyle}>
      <li key={product.title} style={itemStyle}>
        <div style={productCardStyle}>
          <div style={productCardColumnStyle}>
            <TextBox text={product.title}></TextBox>
            <Image
              src={product.images && product.images[imageIndex]}
              width={'640px'}
              height={'480px'}
            />
            <div>
              {
                product.images && product.images.map((imageUrl, index) => (
                  <Image
                    src={imageUrl}
                    width={'80px'}
                    height={'60px'}
                    onClick={() => onClick(index)}
                    key={index}
                    style={galleryStyle}
                  />
                ))
              }
            </div>
          </div>
          <div style={productCardColumnStyle}>
            <Price price={product.price}></Price>
            <BuyFormContainer
              product={{
                ...product,
                image: product.images && product.images[0]
              }}
            />
          </div>
        </div>

      </li>
    </ul>
  </div>
);

Product.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number
  }),
  imageIndex: PropTypes.number,
  onClick: PropTypes.func
};

export default Product;
