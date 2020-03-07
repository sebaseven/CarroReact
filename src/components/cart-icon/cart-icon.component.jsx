import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg.svg";
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/carrito/cart.actions';
import { selectCartItemsCount } from '../../redux/carrito/cart.selectors';

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
const mapStateToProps = (state) =>({
itemCount: selectCartItemsCount(state)
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon) ;
