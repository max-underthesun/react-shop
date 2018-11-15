import React from 'react';

import { PRODUCTS } from 'constants/Products';
import ProductCard from 'components/ProductCard';

const product = PRODUCTS[0];

const App = () => (
  <div>
    <ProductCard {...product}></ProductCard>
  </div>
);

export default App;
