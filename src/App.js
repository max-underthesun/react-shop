import React from 'react';

import { PRODUCTS } from 'constants/Products';
import Image from 'components/Image';
import TextBox from 'components/TextBox';
import Price from 'components/Price';

// const App = () => <div>Hello World!</div>;

const product = PRODUCTS[0];

const App = () => (
  <div>
    <Image src={ product.imageUrl }></Image>
    <TextBox text={ product.title }></TextBox>
    <Price price={ product.price }></Price>
  </div>
);

export default App;
