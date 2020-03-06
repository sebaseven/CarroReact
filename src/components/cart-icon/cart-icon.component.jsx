import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg.svg";
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/carrito/cart.actions';

import "./cart-icon.scss";

const CartIcon = ({ toggleCartHidden , itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon'></ShoppingIcon>
<span className='item-count'>{itemCount}</span>
  </div>
);
const mapDispatchToProps =  dispatch => ({
  toggleCartHidden:() => dispatch(toggleCartHidden())
})
//mapstatetoprops para traer el state al icono y tomar el valor para mostrar
const mapStateToProps = ({cart: {cartItems}}) =>({
itemCount: cartItems.reduce(
  (acumulado,cartItem) => acumulado + cartItem.cantidad,0) 
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon) ;
