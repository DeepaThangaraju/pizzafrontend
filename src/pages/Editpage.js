import React,{useEffect,useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {getPizzaById} from "../actions/pizzaAction";
import {Error} from "../components/Error";
import {Loading} from "../components/Loading";
import {Success} from "../components/Success";
import { editPizza } from "../actions/pizzaAction";

export function Editpizza({match}){
    
    const dispatch=useDispatch();
    const [name,setName]=useState("");
    const [smallprice,setSmallprice]=useState();
    const [mediumprice,setMediumprice]=useState();
    const [largeprice,setLargeprice]=useState();
    const [image,setImage]=useState('');
    const [description,setDescription]=useState('');
    const [category,setCategory]=useState('');

    const getpizzabyidstate=useSelector((state)=>state.getPizzaByIdReducer);
    const {loading,error,pizza}=getpizzabyidstate;
    const editpizzastate=useSelector((state)=>state.editPizzaReducer);
    const {editloading,editsuccess}=editpizzastate;
    useEffect(()=>{
        if(pizza){
            if(pizza._id===match.params.pizzaid){
            setName(pizza.name)
            setDescription(pizza.description)
            setCategory(pizza.category)
            setSmallprice(pizza.prices[0]['small']);
            setMediumprice(pizza.prices[0]['medium'])
            setLargeprice(pizza.prices[0]['large'])
            setImage(pizza.image)
            }
            else{
                dispatch(getPizzaById(match.params.pizzaid))
            }
        }
        else{
            dispatch(getPizzaById(match.params.pizzaid))
        }
       
    
    },[pizza,dispatch])
    function formhandler(e){
        e.preventDefault();
        const editedpizza={
            _id:match.params.pizzaid,
            name,
            image,
            description,
            category,
            prices:{
                small:smallprice,
                medium:mediumprice,
                large:largeprice
            }
        }
       dispatch(editPizza(editedpizza))
       
    }

    return (
        <div>
            <h1>Edit pizza</h1>
            <h2>{match.params.pizzaid}</h2>
            <div className="text-left">
            {loading && <Loading/>}
            {error && <Error error="something went wrong"/>}
            {editloading && <Loading/>}
            {editsuccess && <Success success="updated Successfully"/>}
            <form className="text-left" onSubmit={formhandler}>
                <input 
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)} 
                placeholder="name" 
                className="form-control" />
                 <input 
                type="text"
                value={smallprice}
                onChange={(e)=>setSmallprice(e.target.value)} 
                placeholder="small varient price" 
                className="form-control" />
                <input 
                type="text"
                value={mediumprice}
                onChange={(e)=>setMediumprice(e.target.value)} 
                placeholder="medium varient price" 
                className="form-control" />
                <input 
                type="text"
                value={largeprice}
                onChange={(e)=>setLargeprice(e.target.value)} 
                placeholder="large varient price" 
                className="form-control" />
                <input 
                type="text"
                value={image}
                onChange={(e)=>setImage(e.target.value)} 
                placeholder="Image url" 
                className="form-control" />
                <input 
                type="text"
                value={description}
                onChange={(e)=>setDescription(e.target.value)} 
                placeholder="Description" 
                className="form-control" />
                <input 
                type="text"
                value={category}
                onChange={(e)=>setCategory(e.target.value)} 
                placeholder="category" 
                className="form-control" />
                <button className="btn mt-3" type="submit">Edit Pizza</button>
            </form>
            </div>
        </div>
    )
}