import React from 'react';
import { Link } from 'react-router-dom';

import ProductCard from 'components/shared/widgets/ProductCard';
import CartButton from 'components/shared/elements/CartButton';
import { productPath } from 'helpers/routes';

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

const Product = ({ product, image, onClick }) => (
  <div style={catalogStyle}>
    <CartButton />
    <ul style={listStyle}>
      <li key={product.title} style={itemStyle}>
        <div style={productCardStyle}>
          <div style={productCardColumnStyle}>
            <TextBox text={product.title}></TextBox>
            {/* <Link exact='true' to={productPath(product.id)}>
            </Link> */}
            <Image src={product.images && product.images[image]} width={'640px'} height={'480px'} />
            <Image src={product.images && product.images[0]} width={'80px'} height={'60px'} onClick={ () => onClick(0) } />
            <Image src={product.images && product.images[1]} width={'80px'} height={'60px'} onClick={() => onClick(1) } />
            <Image src={product.images && product.images[2]} width={'80px'} height={'60px'} onClick={() => onClick(2) } />
            <Image src={product.images && product.images[3]} width={'80px'} height={'60px'} onClick={() => onClick(3) } />
          </div>
          <div style={productCardColumnStyle}>
            <Price price={product.price}></Price>
            <BuyFormContainer product={product} />
          </div>
        </div>

      </li>
    </ul>
  </div>
);

export default Product;
