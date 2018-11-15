import React from 'react';

import { PRODUCTS } from 'constants/Products';

import ProductCard from 'components/ProductCard';

const style = {
  listStyle: 'none'
};

const Catalog = () => (
  <ul style={ style }>
    {
      PRODUCTS.map(function(product) {
        return (
          <li  key={ product.title }>
            <ProductCard {...product}></ProductCard>
          </li>
        );
      })
    }
  </ul>
);

export default Catalog;
