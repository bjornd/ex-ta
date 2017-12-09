import { combineReducers } from 'redux'
import { fromJS, List, Map } from 'immutable'

function cart(state = fromJS({list: [], entries: {}}), action) {
  switch (action.type) {
    case 'CART_LOADED':
      return state
        .set('list', List(action.cart.map( ({productId}) => productId )))
        .set('entries', Map(action.cart.map( item => [item.productId, fromJS(item)] )))
    case 'CART_ADD':
      return state
        .update('list', list => list.push(action.product.id))
        .setIn(['entries', action.product.id], fromJS({
          name: action.product.name,
          price: action.product.price,
          productId: action.product.id,
          amount: 1,
        }))
    case 'CART_REMOVE':
      return state
        .update('list', list => list.delete( list.indexOf(action.productId) ))
        .deleteIn(['entries', action.productId])
    case 'CART_UPDATE_AMOUNT':
      return state.setIn(['entries', action.productId, 'amount'], action.amount)
    default:
      return state
  }
}

function products(state = fromJS({list: [], entries: {}}), action) {
  switch (action.type) {
    case 'PRODUCTS_LOADED':
      return state
        .set('list', List(action.products.map( ({id}) => id )))
        .set('entries', Map(action.products.map( item => [item.id, fromJS(item)] )))
    default:
      return state
  }
}

const reducers = combineReducers({
  cart,
  products,
})

export default reducers
