import { combineReducers } from 'redux';

import products from './Catalog';
import cart from './Cart';

export default combineReducers({
  products,
  cart
});
