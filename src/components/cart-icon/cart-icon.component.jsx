import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg.svg";
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/carrito/cart.actions';

import "./cart-icon.scss";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon'></ShoppingIcon>
    <span className='item-count'>0</span>
  </div>
);
const mapDispatchToProps =  dispatch => ({
  toggleCartHidden:() => dispatch(toggleCartHidden())
})
export default connect(null,mapDispatchToProps)(CartIcon) ;
