import React from 'react';

import ProductCard from 'components/shared/widgets/ProductCard';
import CartButton from 'components/shared/elements/CartButton';

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

const Product = ({ product }) => (
  <div style={catalogStyle}>
    <CartButton />
    <ul style={listStyle}>
      <li key={product.title} style={itemStyle}>
        <ProductCard {...product}></ProductCard>
      </li>
    </ul>
  </div>
);

export default Product;
