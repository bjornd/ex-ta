import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk'
import reduxSerialize from './redux-serialize'
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const store = createStore(
  reducers,
  applyMiddleware(reduxThunk, reduxSerialize)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
