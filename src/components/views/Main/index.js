import React from 'react';
import PropTypes from 'prop-types';

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

const Catalog = ({ products }) => (
  <div style={ catalogStyle }>
    <CartButton/>
    <ul style={listStyle }>
      {
        products.map(function(product) {
          return (
            <li key={product.title} style={ itemStyle }>
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
