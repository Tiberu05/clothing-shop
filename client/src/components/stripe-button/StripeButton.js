import React from 'react';
import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishKey = 'pk_test_51HcR5EJ2IJ5jxTAgr3tNW8AkY0Tjq6VaM0WW5KFQ767Bh9nHMpVGzlTGaAXJR34jmKVmd1xS7iE7MsCY4R4AW8cv00i0drriHs';

    const onToken = token => {
        axios.post('/payment', {
            amount: priceForStripe,
            token
        })
        .then(response => {
            alert('Payment was succesful');
        }).catch(error => {
            console.log('Payment error: ' + error)
            alert('There was an issue with your payment');
        })
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="Clothing Shop"
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishKey}
        />
    )
};

export default StripeCheckoutButton;