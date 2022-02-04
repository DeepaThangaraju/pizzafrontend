import React from "react";
import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
// import {pizzas} from "../pizza";
import {Pizzaitem} from "../components/Pizzaitem";
import {getAllPizzas} from "../actions/pizzaAction.js";
import { Loading } from "../components/Loading";
import {Error} from "../components/Error";
import { Filter } from "../components/Filter";

export function Homepage(){
    
    const dispatch=useDispatch();
    //get data from reducers
    const pizzasstate=useSelector(state=>state.getAllPizzasReducer);

    const {pizzas,error,loading}=pizzasstate
    useEffect(()=>{
dispatch(getAllPizzas());
    },[])
    return (
        <div>
             <Filter/>
<div className="row justify-content-center">
   
          
          {
          loading ? (
              <Loading />
              ) : 
          error ? (
          <Error error="something went wrong"/>
          ):
          pizzas.map(pizza=>{
              return (
              <div className="col-md-4 col-sm-3 m-3" key={pizzas._id}>
                  <div>
                      <Pizzaitem pizza={pizza}/>
                  </div>
              </div>  
              )
          })}
      </div>
        </div>
    )
}