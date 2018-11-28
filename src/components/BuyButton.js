import React from 'react';
import PropTypes from 'prop-types';

import contextCart from 'context/contextCart';
// import ProductCard from 'components/ProductCard';

const styleBuyButton = {
  minWidth: '60px',
  minHeight: '30px'
};

// const BuyButton = ({ product }) => (
//   <contextCart.Consumer>
//     {
//       ({ products }) => (
//         // <button onClick={ () => products.push(product) } style={ styleBuyButton }>
//         <button onClick={ () => console.log(products) } style={ styleBuyButton }>
//           Add to Cart { product.id + '**' + product.title }
//         </button>
//       )
//     }
//   </contextCart.Consumer>
// );

const BuyButton = ({ product }) => (
  <contextCart.Consumer>
    {
      ({ addProduct }) => (
        <button onClick={ () => addProduct(product) } style={ styleBuyButton }>
          Add to Cart
        </button>
      )
    }
  </contextCart.Consumer>
);

// class BuyButton extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.addProduct = this.addProduct.bind(this);
//   }

//   // addProduct(products, product) {
//   //   // let products = this.state.cart.products;
//   //   // this.setState({ cart: { products: products.push(PRODUCTS[this.product])}})
//   //   // console.log(products);
//   //   // console.log(product);

//   //   products.push(product);
//   // }

//   render() {
//     // console.log(this.props);

//     const { product } = this.props;

//     return (
//       <contextCart.Consumer>
//         {
//           ({ addProduct }) => (
//             // <button onClick={() => console.log(products)} style={styleBuyButton}>
//             // <button onClick={ () => products.push(product) } style={ styleBuyButton }>
//             // <button onClick={ () => this.addProduct(products, product) } style={ styleBuyButton }>
//             <button onClick={ () => addProduct(product) } style={ styleBuyButton }>
//               Add to Cart {product.id + '**' + product.title}
//             </button>
//           )
//         }
//       </contextCart.Consumer>    );
//   }
// }

BuyButton.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string.isRequired
  })
  // product: PropTypes.shape({
  //   ...ProductCard.propTypes,
  //   id: PropTypes.string.isRequired
  // })
};


export default BuyButton;
