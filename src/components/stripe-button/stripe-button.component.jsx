import React from "react";
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51JRXX1ILPatXIHt1ylXttUnuP2nKUp33n2UG1am2D2yhCYoANAhlgtDQTwyKVKuxUNaGHZX8aLWRkOavkD28ma1l00vDOJIT4C'
    const onToken = token => {
        console.log(token)
        alert("Payment successful!")
    }

    return(
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is ${price}$`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton