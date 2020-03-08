import React from 'react';
import {connect} from 'react-redux';
import { clearItemFromCart } from '../../redux/carrito/cart.actions';
import './checkout-item.styles.scss';
//utf 8 dinging
const CheckoutItem = ({ cartItem, clearItem }) => {
    const { name, imageUrl, price, cantidad } = cartItem;
    return (
      <div className='checkout-item'>
        <div className='image-container'>
          <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{cantidad}</span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => clearItem(cartItem)}>
          &#10005;
        </div>
      </div>
    );
  };
const mapDispatchToProps = dispatch =>
({
    clearItem: item=> dispatch(clearItemFromCart(item))
})
export default connect(null,mapDispatchToProps)(CheckoutItem) ;