import React from 'react';
import contextCart from 'context/contextCart';

import ProductCard from 'components/views/Main/ProductCard';

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

const Cart = () => (
  <contextCart.Consumer>
    {
      ({ cart }) => (
        <div style={catalogStyle}>
          <h1>Cart</h1>
          <ul style={listStyle}>
            {
              cart.map(function (product, index) {
                return (
                  <li key={index} style={itemStyle}>
                    <ProductCard {...product}></ProductCard>
                  </li>
                );
              })
            }
          </ul>
        </div>
      )
    }
  </contextCart.Consumer>
);


export default Cart;
