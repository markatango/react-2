import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const { REACT_APP_STRIPE_KEY } = process.env;

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const publishableKey = REACT_APP_STRIPE_KEY;
    console.log(publishableKey);

    const onToken = (token) => {
        console.log(token);
        alert("Paymet successful");
    }



    return(
        <StripeCheckout 
            label='Pay Now' 
            name='CRWN Clothing Ltd'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}


export default StripeCheckoutButton;