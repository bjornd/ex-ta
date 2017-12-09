import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateAmountInCart, removeFromCart, loadCart } from './actions'

class Cart extends Component {
  componentDidMount() {
    this.props.dispatch( loadCart() )
  }

  render() {
    return (
      this.props.items.length
        ? <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Amount</th>
              </tr>
              {
                this.props.items.map( item =>
                  <tr key={item.productId}>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>{item.amount}</td>
                    <td>
                      <button disabled={item.amount === 1} onClick={this.onDecrementClick.bind(this, item)}>-</button>
                      <button onClick={this.onIncrementClick.bind(this, item)}>+</button>
                      <button onClick={this.onRemoveClick.bind(this, item)}>Remove</button>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        : <div>Empty cart</div>
    );
  }

  onIncrementClick(item) {
    this.props.dispatch( updateAmountInCart( item.productId, item.amount + 1 ) )
  }

  onDecrementClick(item) {
    this.props.dispatch( updateAmountInCart( item.productId, item.amount - 1 ) )
  }

  onRemoveClick(item) {
    this.props.dispatch( removeFromCart( item.productId) )
  }
}

export default connect(
  ({cart}) => ({
    items: cart.get('list').map( id => cart.getIn(['entries', id]) ).toJS(),
  })
)(Cart);
