import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from 'components/ProductCard';
import Cart from 'components/Cart';

const style = {
  listStyle: 'none'
};

const Catalog = ({ products }) => (
  <div style={{ width: '50%', marginLeft: '25%', marginRight: '25%' } }>
    <Cart/>
    <ul style={ style }>
      {
        products.map(function(product) {
          return (
            <li key={product.title} style={{ width: 'inherit' }}>
              <ProductCard {...product}></ProductCard>
            </li>
          );
        })
      }
    </ul>
  </div>
);

Catalog.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      ...ProductCard.propTypes,
      id: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Catalog;
