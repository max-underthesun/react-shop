import React from 'react';
import PropTypes from 'prop-types';

import contextCart from 'context/contextCart';
import BuyForm from 'components/shared/widgets/BuyForm';

class BuyFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      disabled: true
    };
    this.addProducts = this.addProducts.bind(this);
    this.getInput = this.getInput.bind(this);
  }

  getInput(input) {
    const inputValue = Number(input);
    if (inputValue > 0 && Number.isInteger(inputValue)) {
      this.setState({ number: inputValue, disabled: false });
    } else {
      this.setState({ number: 0, disabled: true });
    }
  }

  addProducts(addProduct) {
    for (let i = 1; i <= this.state.number; i++) {
      addProduct(this.props.product);
    }
    this.setState({ number: 0, disabled: true });
  }

  render() {
    return (
      <contextCart.Consumer>
        {
          ({ addProduct }) => (
            <BuyForm
              addProducts={() => this.addProducts(addProduct) }
              disabled={this.state.disabled}
              getInput={this.getInput}
              inputValue={this.state.number}
            />
          )
        }
      </contextCart.Consumer>
    );
  }
}

BuyFormContainer.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string
  })
};

export default BuyFormContainer;
