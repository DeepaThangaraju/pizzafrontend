import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL
export const getAllPizzas=()=>async dispatch=>{
    dispatch({type:'GET_PIZZAS_REQUEST'})
    try{
        const response=await axios.get(`${BASE_URL}/api/pizzas/getallpizzas`);
        console.log(response);
        dispatch({type:'GET_PIZZAS_SUCCESS', payload:response.data})
    }catch(error){
        dispatch({type:'GET_PIZZAS_FAILED', payload:error})
    }
}

export const filteredPizzas=(searchkey, category)=>async dispatch=>{
    var filterpizzas;
    dispatch({type:'GET_PIZZAS_REQUEST'})
    try{
        const response=await axios.get(`${BASE_URL}/api/pizzas/getallpizzas`);
        filterpizzas=response.data.filter(pizza=>pizza.name.toLowerCase().includes(searchkey))
        if(category!=='all'){
            filterpizzas=response.data.filter(pizza=>pizza.category.toLowerCase()===category)
        }
        dispatch({type:'GET_PIZZAS_SUCCESS', payload : filterpizzas})
    }catch(error){
        dispatch({type:'GET_PIZZAS_FAILED', payload:error})
    }
}

export const addPizza=(pizza)=>async dispatch=>{
    dispatch({type:'ADD_PIZZA_REQUEST'})
    try{
       const response=await axios.post(`${BASE_URL}/api/pizzas/addpizzas`,{pizza})
       console.log(response)
       dispatch({type:'ADD_PIZZA_SUCCESS'})
    }catch(error){
       dispatch({type:'ADD_PIZZA_FAILED',payload:error})
    }
}

export const getPizzaById=(pizzaid)=>async dispatch=>{
    dispatch({type:'GET_PIZZABYID_REQUEST'})
    try{
        const response=await axios.post(`${BASE_URL}/api/pizzas/getpizzabyid`,{pizzaid});
        console.log(response);
        dispatch({type:'GET_PIZZABYID_SUCCESS', payload:response.data})
    }catch(error){
        dispatch({type:'GET_PIZZABYID_FAILED', payload:error})
    }
}

export const editPizza=(editedPizza)=>async dispatch=>{
    dispatch({type:'EDIT_PIZZA_REQUEST'})
    try{
       const response=await axios.post(`${BASE_URL}/api/pizzas/editpizza`,{editedPizza})
       console.log(response)
       dispatch({type:'EDIT_PIZZA_SUCCESS'})
       window.location.href="/admin/pizzalist";
    }catch(error){
       dispatch({type:'EDIT_PIZZA_FAILED',payload:error})
    }
}

export const deletePizza=(pizzaid)=>async dispatch=>{
 try{
   const response=await axios.post(`${BASE_URL}/api/pizzas/deletepizza`,{pizzaid})
   alert("pizza deleted successfully");
   console.log(response);
   window.location.reload();
 }catch(error){
  alert("Something went wrong");
  console.log(error);
 }
}

