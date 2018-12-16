import React from 'react';
import { productPath } from 'helpers/routes';
import ProductPageContainer from 'containers/ProductPageContainer';

export default {
  path: productPath(),
  render: ({ match }) => (
    <ProductPageContainer id={match.params.id} />
  )
};
