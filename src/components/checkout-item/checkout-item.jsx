import React from 'react';

import './checkout-item.styles.scss';
//utf 8 dinging
const CheckoutItem = ({ cartItem: { name, imageUrl, price, cantidad } }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>{cantidad}</span>
    <span className='price'>{price}</span>
    <div className='remove-button'>&#10005;</div>
  </div>
);

export default CheckoutItem;