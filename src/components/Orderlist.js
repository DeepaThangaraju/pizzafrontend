import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { useEffect } from "react";
import { getAllOrder } from "../actions/saveorderAction";

export function Orderlist(){
    const dispatch=useDispatch();
    const getallorderstate=useSelector(state=>state.getAllOrdersReducer)
    const {loading,error,orders}=getallorderstate
    useEffect(()=>{
      dispatch(getAllOrder())
    },[dispatch])
    return (
        <div>
            <h1>Order List</h1>
            {loading && <Loading />}
            {error && <Error error="Something went wrong"/>}
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Varient</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {orders && orders.map(order=>{
                        return <tr>
                                   <td>{order._id}</td>
                                   <td>{order.name}</td>
                                   <td>{order.varient}</td>
                                   <td>{order.quantity}</td>
                                   <td>{order.price}</td>
                              </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}