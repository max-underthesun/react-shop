import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from 'components/ProductCard';

const style = {
  listStyle: 'none'
};

const Catalog = ({ products }) => (
  <ul style={ style }>
    {
      products.map(function(product) {
        return (
          <li  key={ product.title }>
            <ProductCard {...product}></ProductCard>
          </li>
        );
      })
    }
  </ul>
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
