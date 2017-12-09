import React, { Component } from 'react';
import Cart from './Cart';
import ProductSelector from './ProductSelector';

class App extends Component {
  render() {
    return (
      <div>
        <Cart items={[
          { productId: 1, name: 'Apples', amount: 1, price: 10 },
          { productId: 2, name: 'Oranges', amount: 2, price: 8 },
          { productId: 3, name: 'Pears', amount: 5, price: 6 },
        ]}/>
        <ProductSelector products={[
          { id: 1, name: 'Apples', price: 10 },
          { id: 2, name: 'Oranges', price: 8 },
          { id: 3, name: 'Pears', price: 8 },
        ]}/>
      </div>
    );
  }
}

export default App;
