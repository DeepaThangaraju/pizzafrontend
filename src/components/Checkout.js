import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch } from 'react-redux';
import { placeOrder } from '../actions/orderAction';

export function Checkout({subtotal}){
    const dispatch=useDispatch();
    function tokenhandler(token){
         console.log(token);
         dispatch(placeOrder(token,subtotal))
    }
    return (
        <div>
            <StripeCheckout  
            amount={subtotal*100} 
            shippingAddress 
            token={tokenhandler}
            stripeKey='pk_test_51KNizaSD5eCpTjLK3WF5FLbvfLdYUj81m0ERGdq481PFpQkRiGXAdT6EFRCSTNgXFUUlKu2zhSEWqe5n4KOZr1LN002cd5jPME' 
            currency='INR'>
               
                <button className='btn'>Pay Now</button>

            </StripeCheckout>
        </div>      
    )
}