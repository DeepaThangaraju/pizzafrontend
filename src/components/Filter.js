import React from'react';
import {useDispatch} from "react-redux";
import {useState} from 'react';
import { filteredPizzas } from '../actions/pizzaAction';

export function Filter(){
    const dispatch=useDispatch();
    const [searchkey, setSearchkey]=useState('');
    const [category, setCategory]=useState('all');
    return (
        <div className="container">
           <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
               <div className="col w-100">
                    <input value={searchkey} onChange={(e)=>setSearchkey(e.target.value)} type="text" className="form-control w-80" placeholder="search pizzas">

                    </input>
               </div>
               <div className="col w-100">
                   <select className='form-control w-80 mt-2' 
                   value={category} 
                   onChange={(e)=>setCategory(e.target.value)}>
                       <option value="all">All</option>
                       <option value="veg">Veg</option>
                       <option value="nonveg">Non-Veg</option>
                   </select>

               </div>
               <div className="col w-100 mt-2">
                   <button className="btn w-90" style={{width:"200px"}} 
                   onClick={()=>{dispatch(filteredPizzas(searchkey,category))}}>
                       Filter
                   </button>
               </div>
           </div>
        </div>
    )
}