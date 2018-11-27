import React from 'react';

import update from 'immutability-helper';


import { PRODUCTS } from 'constants/Products';
import Catalog from 'components/Catalog';
import contextCart from 'context/contextCart';

class CatalogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: {
        products: []
        // ,
        // addProduct: this.addProduct
      }
    };
    this.addProduct = this.addProduct.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.setState({ products: PRODUCTS });
  }

  addProduct(product) {
    this.state = update(this.state, { cart: { products: { $push: [product] } } });
    // this.setState({ cart: { products: this.state.products.push(product) } });
    // this.setState((state) => {
    //   // console.log(state.cart);
    //   // console.log(state.cart.products);
    //   // let newState = state.cart.products.push(product);

    //   // return { cart: { products: state.cart.products.push(product) } }
    //   // return { cart: { products: newState } }
    // });
    console.log(this.state.cart);

  }
  // addProduct(product) {
  //   console.log(this);
  //   console.log(this.state);
  //   const products = this.state.cart.products;

  //   this.setState({ cart: { products: products.push(product) } });
  // }

  render() {
    const { products, cart } = this.state;
    return (
      <contextCart.Provider value={ { products: cart.products, addProduct: this.addProduct } }>
        <Catalog products={ products } />
      </contextCart.Provider>
    );
  }
}

export default CatalogPage;

