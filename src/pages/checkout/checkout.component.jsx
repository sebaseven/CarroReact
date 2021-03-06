import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Producto</span>
      </div>
      <div className="header-block">
        <span>Descripcion</span>
      </div>
      <div className="header-block">
        <span>Cantidad</span>
      </div>
      <div className="header-block">
        <span>Precio</span>
      </div>
      <div className="header-block">
        <span>Eliminar</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>Total:$ {total}</span>
    </div>
    <div className="test-warning">
      ***utilizar la siguente tarjeta de credito de testing***
      <br />
      4242-4242-4242-4242 Exp:01/21 CVV:123
      

    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
