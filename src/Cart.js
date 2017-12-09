import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateAmountInCart, removeFromCart, loadCart } from './actions'

const sortNextDir = {
  '0': 1,
  '1': -1,
  '-1': 0,
}

const sortChars = {
  '0': '',
  '1': '\u2193',
  '-1': '\u2191',
}

class Cart extends Component {
  state = {
    sortField: null,
    sortDir: 0,
  }

  componentDidMount() {
    this.props.dispatch( loadCart() )
  }

  render() {
    const items = this.state.sortField && this.state.sortDir
      ? this.props.items.sort( (a, b) => {
        if (a.get(this.state.sortField) < b.get(this.state.sortField)) { return -1 * this.state.sortDir; }
        if (a.get(this.state.sortField) > b.get(this.state.sortField)) { return 1 * this.state.sortDir; }
        return 0
      }).toJS()
      : this.props.items.toJS()

    return (
      items.length
        ? <table>
            <tbody>
              <tr>
                <th onClick={this.onColumnClick.bind(this, 'name')}>
                  Name {this.state.sortField === 'name' ? sortChars[this.state.sortDir] : null}
                </th>
                <th onClick={this.onColumnClick.bind(this, 'price')}>
                  Price {this.state.sortField === 'price' ? sortChars[this.state.sortDir] : null}
                </th>
                <th onClick={this.onColumnClick.bind(this, 'amount')}>
                  Amount {this.state.sortField === 'amount' ? sortChars[this.state.sortDir] : null}
                </th>
              </tr>
              {
                items.map( item =>
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

  onColumnClick(field) {
    this.setState( prevState => ({
      sortField: field,
      sortDir: sortNextDir[prevState.sortDir.toString()],
    }))
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
    items: cart.get('list').map( id => cart.getIn(['entries', id]) ),
  })
)(Cart);
