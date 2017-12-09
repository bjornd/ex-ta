export function addToCart(product) {
  return (dispatch, getState) => {
    const state = getState()
    const cartProduct = state.cart.getIn(['entries', product.id])
    if (cartProduct) {
      return dispatch({
        type: 'CART_UPDATE_AMOUNT',
        productId: product.id,
        amount: cartProduct.get('amount') + 1,
      })
    } else {
      return dispatch({
        type: 'CART_ADD',
        product: product,
      })
    }
  }
}

export function removeFromCart(productId) {
  return {
    type: 'CART_REMOVE',
    productId,
  }
}

export function updateAmountInCart(productId, amount) {
  return {
    type: 'CART_UPDATE_AMOUNT',
    productId,
    amount,
  }
}

export function loadCart() {
  return {
    type: 'CART_LOADED',
    cart: JSON.parse(localStorage.getItem('cart')),
  }
}

export function loadProducts() {
  return (dispatch) => fetch('products.json')
    .then( response => response.json() )
    .then( products => dispatch( { type: 'PRODUCTS_LOADED', products } ) )
}
