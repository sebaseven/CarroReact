import { createSelector } from 'reselect';
//importo el input selector para tomar una porcion del state solamente, en este caso del carrito

//funcion que retorna el state entero y retorna una porcion, una caoa de DB en geral
// de todo el state del reducer solo queremos una pieza
const selectCart = state => state.cart;
//segundo selector para extraer solo la propiedad del carrito, recibe dos arg, uno un array de
//input selectors el segundo arg es una funcion que devuelve el valor que queremnos del selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);
// saco la propiedad hidden
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);
//vas explotando de apoco hasta llegar al valor necesitado
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);
