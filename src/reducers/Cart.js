import { assign } from 'lodash/object';

import * as types from 'constants/actionTypes/CartActionTypes';

const initialState = {
  cart: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.ADD_PRODUCT:
      return assign({}, state, { cart: [...state.cart, action.product] });
    default:
      return state;
  }
}
