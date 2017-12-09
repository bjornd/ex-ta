import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadProducts, addToCart } from './actions';

class ProductSelector extends Component {
  state = { selectedProductId: '' }

  componentDidMount() {
    this.props.dispatch( loadProducts() )
  }

  render() {
    return (
      <div>
        <select value={this.state.selectedProductId} onChange={this.onSelectChange}>
          <option value="">Nothing selected</option>
          {
            this.props.products.map( product =>
              <option key={product.id} value={product.id}>{product.name} - ${product.price}</option>
            )
          }
        </select>
        <button disabled={this.state.selectedProductId === ''} onClick={this.onSelectBtnClick}>Select</button>
      </div>
    );
  }

  onSelectBtnClick = () => {
    this.props.dispatch( addToCart( this.props.productsById[ this.state.selectedProductId ] ) );
  }

  onSelectChange = event => {
    this.setState({selectedProductId: event.target.value});
  }
}

export default connect(
  ({products}) => ({
    products: products.get('list').map( id => products.getIn(['entries', id]) ).toJS(),
    productsById: products.get('entries').toJS(),
  })
)(ProductSelector);
