import React from 'react';

import { PRODUCTS } from 'constants/Products';
import Image from 'components/Image';

// const App = () => <div>Hello World!</div>;

const product = PRODUCTS[0];

const App = () => (
  <Image src={product.imageUrl}></Image>
);

export default App;
