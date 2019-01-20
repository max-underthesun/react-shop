import * as types from 'constants/actionTypes/CartActionTypes';

export const addProduct = (product) => ({
  type: types.ADD_PRODUCT,
  product
});
