import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { useEffect } from "react";
import { getAllPizzas } from "../actions/pizzaAction";
import { Link } from "react-router-dom";
import {deletePizza} from "../actions/pizzaAction"

export function Pizzalist(){
    const dispatch=useDispatch();
    const pizzasstate=useSelector(state=>state.getAllPizzasReducer);

    const {pizzas,error,loading}=pizzasstate
    useEffect(()=>{
        dispatch(getAllPizzas());
            },[dispatch])
    return (
        <div>
            <h1>Pizza List</h1>
            {error && <Error error="somethimg went wrong"/>}
            {loading && <Loading />}
            <table className="table table-bordered">
                <thead>
                    <tr className="thead-dark">
                        <th>Name</th>
                        <th>Prices</th>
                        <th>Category</th>
                        <th>Actions</th>
                   </tr>
                </thead>
                <tbody>
                       {pizzas && pizzas.map(pizza=>{
                           return <tr>
                               <td>{pizza.name}</td>
                               <td>
                                   Small:{pizza.prices[0]['small']}<br/>
                                   Medium:{pizza.prices[0]['medium']}<br/>
                                   Lagre:{pizza.prices[0]['large']}
                               </td>
                               <td>{pizza.category}</td>
                               <td>
                                   <i className="fa fa-trash m-1" onClick={()=>dispatch(deletePizza(pizza._id))}></i>
                                   <Link to={`/admin/editpizza/${pizza._id}`}><i className="fa fa-edit m-1"></i></Link>
                               </td>
                           </tr>
                       })}
                </tbody>
            </table>
            
        </div>
    )
}