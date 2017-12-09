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

export function loadProducts() {
  return {
    type: 'PRODUCTS_LOADED',
    products: [
      { id: 1, name: 'Apples', price: 10 },
      { id: 2, name: 'Oranges', price: 8 },
      { id: 3, name: 'Pears', price: 8 },
    ]
  }
}
