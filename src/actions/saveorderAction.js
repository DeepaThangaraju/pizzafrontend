import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL
export const saveOrder=(order)=>async dispatch=>{
    dispatch({type:'ORDER_SAVE_REQUEST'})
    try{
        const response=await axios.post(`${BASE_URL}/api/placeorders/saveorder`,order)
        console.log(response)
        dispatch({type:'ORDER_SAVE_SUCCESS'})
    }catch(error){
        dispatch({type:'ORDER_SAVE_FAILED',payload:error})
    }
}

export const getAllOrder=()=>async dispatch=>{
    dispatch({type:'GET_ALLORDERS_REQUEST'})
    try{
        const response=await axios.get(`${BASE_URL}/api/placeorders/getallorders`);
        console.log(response);
        dispatch({type:'GET_ALLORDERS_SUCCESS', payload:response.data})
    }catch(error){
        dispatch({type:'GET_ALLORDERS_FAILED', payload:error})
    }
}