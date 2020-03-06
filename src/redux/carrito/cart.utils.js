//si ya existe el item no lo agrego pero incremento la cantidad --
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  //si existe cartItem entonces no agrego
  if (existingCartItem) {
    console.log('akjdklejflkeflewhfewhfj');
      //map devuelve un nuevo array y incremento cant en uno si existe el item si no devuelvo el item como vino
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, cantidad: cartItem.cantidad + 1 }
        : cartItem
    );
  }
//si no encontro nada armo un nuevo array con la info y la cantidad hardcode en 1
  return [...cartItems, { ...cartItemToAdd, cantidad: 1 }];
   //ahora importar esta fn en el reducer...
};


