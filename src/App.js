import React, { Component } from 'react';
import Cart from './Cart';
import ProductSelector from './ProductSelector';

class App extends Component {
  render() {
    return (
      <div>
        <Cart />
        <ProductSelector />
      </div>
    );
  }
}

export default App;
