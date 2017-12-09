import React, { Component } from 'react';
import Cart from './Cart';
import SaveCartBtn from './SaveCartBtn';
import ProductSelector from './ProductSelector';

class App extends Component {
  render() {
    return (
      <div>
        <Cart />
        <ProductSelector />
        <SaveCartBtn />
      </div>
    );
  }
}

export default App;
