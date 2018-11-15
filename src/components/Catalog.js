import React from 'react';

import { PRODUCTS } from 'constants/Products';

import ProductCard from 'components/ProductCard';

const Catalog = () => (
  PRODUCTS.map(function(product) {
    return (
      <ProductCard {...product} key={ product.id }></ProductCard>
    );
  })
);

export default Catalog;
