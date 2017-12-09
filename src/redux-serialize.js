const serialize = store => next => action => {
  const result = next(action)

  if (['CART_ADD', 'CART_REMOVE', 'CART_UPDATE_AMOUNT'].indexOf(action.type) > -1) {
    const cart = store.getState().cart
    localStorage.setItem('cart',
      JSON.stringify(cart.get('list').map( id => cart.getIn(['entries', id]) ).toJS())
    )
  }
  return result
}

export default serialize
