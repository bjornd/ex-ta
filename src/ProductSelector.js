import React, { Component } from 'react';

class ProductSelector extends Component {
  state = { selectedProductId: '' }

  render() {
    return (
      <div>
        <select value={this.state.selectedProductId} onChange={this.onSelectChange}>
          {
            this.props.products.map( product =>
              <option key={product.id} value={product.id}>{product.name} - ${product.price}</option>
            )
          }
        </select>
        <button>Add</button>
      </div>
    );
  }

  onSelectChange = event => {
    this.setState({selectedProductId: event.target.value});
  }
}

export default ProductSelector;
