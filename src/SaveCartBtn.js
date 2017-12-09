import React, { Component } from 'react';
import { connect } from 'react-redux'
import { saveCart } from './actions';

class SaveCartBtn extends Component {
  render() {
    return (
      <button onClick={this.onSaveBtnClick}>Save to server</button>
    );
  }

  onSaveBtnClick = () => {
    this.props.dispatch( saveCart() );
  }
}

export default connect()(SaveCartBtn);
