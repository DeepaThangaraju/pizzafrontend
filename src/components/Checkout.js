import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../actions/orderAction';
import {Error} from '../components/Error';
import { Success } from '../components/Success';
import { Loading } from '../components/Loading';

export function Checkout({subtotal}){
    
    const orderstate=useSelector((state)=>state.placeOrderReducer)
    const {loading,success,error}=orderstate;
    const dispatch=useDispatch();
    function tokenhandler(token){
         console.log(token);
         dispatch(placeOrder(token,subtotal))
    }
    return (
        <div>
            {loading && <Loading/>}
            {error && <Error error="something went wrong"/>}
            {success && <Success success="your order placed successfully"/>}
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