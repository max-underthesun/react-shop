import React from 'react';
import PropTypes from 'prop-types';

import contextCart from 'context/contextCart';

class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(product) {
    this.setState((state) => ({ cart: [...state.cart, product] }));
  }

  render() {
    const { cart } = this.state;
    return (
      <contextCart.Provider value={{ cart, addProduct: this.addProduct }}>
        { this.props.children }
      </contextCart.Provider>
    );
  }
}

CartContainer.propTypes = {
  children: PropTypes.node
};

export default CartContainer;
