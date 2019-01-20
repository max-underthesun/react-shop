import { assign } from 'lodash/object';

import * as types from 'constants/actionTypes/CatalogActionTypes';

const initialState = {
  products: [],
  isFetching: false,
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_PRODUCTS_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_PRODUCTS_SUCCESS:
      return assign({}, initialState, { products: action.responce });
    default:
      return state;
  }
}
