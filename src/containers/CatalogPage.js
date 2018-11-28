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
      // cart: {
      //   products: [],
      //   addProduct: this.addProduct
      // }
      cart: []

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
    // this.state = update(this.state, { cart: { products: { $push: [product] } } });
    // this.state = update(this.state, { cart: { $push: [product] } });
    // this.setState({ cart: { ...this.state.cart, products: this.state.cart.products.push(product)}});
    // this.setState((state) => {
    //   console.log(state);
    //   console.log(state.cart);
    //   // const stateCart = {...state.cart};
    //   const stateCart = [...state.cart, product];
    //   console.log(stateCart);

    //   // stateCart.push(product);
    //   return { cart: stateCart};
    // });

    // this.setState((state) => {
    //   // console.log(state.cart);
    //   // console.log(state.cart.products);
    //   // let newState = state.cart.products.push(product);

    //   // return { cart: { products: state.cart.products.push(product) } }
    //   // return { cart: { products: newState } }
    // });
    // console.log(this.state.cart.products);
    // console.log(this.state.cart);


    // this.setState((state) => ({ cart: [...state.cart, product] }));
    this.setState(update(this.state, { cart: { $push: [product] } }));
    // this.state = update(this.state, { cart: { $push: [product] } });
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
      // <contextCart.Provider value={ { products: cart.products, addProduct: this.addProduct } }>
      <contextCart.Provider value={{ cart, addProduct: this.addProduct } }>
        <Catalog products={ products } />
      </contextCart.Provider>
    );
  }
}

export default CatalogPage;

