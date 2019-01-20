import request from 'superagent';

import { SERVER_URL } from 'constants/ServerUrl';
import * as types from 'constants/actionTypes/CatalogActionTypes';

const requestProducts = () => ({
  type: types.FETCH_PRODUCTS_REQUEST
});

const errorPosts = () => ({
  type: types.FETCH_PRODUCTS_ERROR
});

const receiveProducts = (response) => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  response
});

export function fetchProducts() {
  return (dispatch) => {
    dispatch(requestProducts());

    return (
      request
        .get(`${SERVER_URL}/`)
        .end((error, response) => {
          error ?
            dispatch(errorPosts()) :
            dispatch(receiveProducts(response.body));
        })
    );
  };
}
