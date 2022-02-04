import React from "react";
import {useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { addPizza } from "../actions/pizzaAction";
import {Error} from "../components/Error";
import {Loading} from "../components/Loading";
import {Success} from "../components/Success";


export function Addpizza(){
    const [name,setName]=useState("");
    const [smallprice,setSmallprice]=useState();
    const [mediumprice,setMediumprice]=useState();
    const [largeprice,setLargeprice]=useState();
    const [image,setImage]=useState('');
    const [description,setDescription]=useState('');
    const [category,setCategory]=useState('');
    const dispatch=useDispatch();
    const addpizza=useSelector(state=>state.addPizzaReducer);
    const {success,loading,error}=addpizza
    function formhandler(e){
        e.preventDefault();
        const pizza={
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
        console.log(pizza);
        dispatch(addPizza(pizza));
    }


    return (
        <div>
            <div className="text-left">
            <h1>Add Pizza</h1>
            {loading && <Loading/>}
            {error && <Error error="something went wrong"/>}
            {success && <Success success="pizza added successfully"/>}
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
                <button className="btn mt-3" type="submit">Add Pizza</button>
            </form>
            </div>
        </div>
    )
}