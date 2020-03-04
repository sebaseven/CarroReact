import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import CartItem from '../cart-item/cart-item.component';
//hay que hacer un pulldown desde CartItem por eso hacemos connect
import { connect } from 'react-redux';
import "./cart-dropdown.styles.scss";

const CartDropdown = ( { cartItems } ) => (
  <div className="cart-dropdown">
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Carrito Vacio</span>
      )}
    </div>
    <div className="cart-items">
        <CustomButton>IR AL CHECKOUT</CustomButton>
    </div>
  </div>
);
const mapStateToProps = ({ cart: {cartItems} }) => (
  {cartItems}
)

export default connect(mapStateToProps)(CartDropdown);

