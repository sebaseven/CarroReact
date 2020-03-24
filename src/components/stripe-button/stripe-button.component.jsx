import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) =>{
    const clave = 'pk_test_yZWL0FIPpCk0rNv67EcvbUtq00fJIHvtNl';
    const StripePrice = price * 100;
    const onToken = token =>{
        console.log(token);
        alert('Compra exitosa');
    }
    return (
        <StripeCheckout label='Realizar Pago'
        name='SebaSeveN'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Su Total es $${price}`}
        amount={StripePrice}
        panelLabel='Complete su compra!!!'
        token={onToken}
        stripeKey={clave}
        >
        </StripeCheckout>
    )

    }
    export default StripeCheckoutButton;
