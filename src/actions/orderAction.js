import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL
export const placeOrder=(token,subtotal)=>async (dispatch,getState)=>{
    dispatch({type:'PLACE_ORDER_REQUEST'})
    const currentUser=getState().loginUserReducer.currentUser
    const cartItems=getState().cartReducer.cartItems
    try{
     const response=await axios.post(`${BASE_URL}/api/orders/placeorder`,{token,subtotal,currentUser,cartItems})
     dispatch({type:'PLACE_ORDER_SUCCESS'})
     console.log(response);
    }catch(error){
        dispatch({type:'PLACE_ORDER_FAILED'})
     console.log(error);
    }
}

export const getUserOrder=()=>async dispatch=>{
    dispatch({type:'GET_USER_ORDER_REQUEST'})
    try{
        const response=await axios.get(`${BASE_URL}/api/orders/getuserorders`);
        console.log(response);
        dispatch({type:'GET_USER_ORDER_SUCCESS', payload:response.data})
    }catch(error){
        dispatch({type:'GET_USER_ORDER_FAILED', payload:error})
    }
}

