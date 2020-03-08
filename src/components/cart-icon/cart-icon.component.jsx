import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg.svg";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/carrito/cart.actions';
import { selectCartItemsCount } from '../../redux/carrito/cart.selectors';



import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);