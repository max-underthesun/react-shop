import React from 'react';

import { PRODUCTS } from 'constants/Products';
import Image from 'components/Image';
import TextBox from 'components/TextBox';

// const App = () => <div>Hello World!</div>;

const product = PRODUCTS[0];

const App = () => (
  <div>
    <Image src={product.imageUrl}></Image>
    <TextBox text={product.title}></TextBox>
  </div>
);

export default App;
