import React, { Component } from 'react';
import { connect } from 'react-redux'

class Cart extends Component {
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
                  </tr>
                )
              }
            </tbody>
          </table>
        : <div>Empty cart</div>
    );
  }
}

export default connect(
  ({cart}) => ({
    items: cart.get('list').map( id => cart.getIn(['entries', id]) ).toJS(),
  })
)(Cart);
