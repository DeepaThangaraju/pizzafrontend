import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getUserOrder } from '../actions/orderAction';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
export function Orderpage(){
    const dispatch=useDispatch();
    const orderstate=useSelector(state=>state.getuserorderReducer);
    const {orders,loading,error}=orderstate
    useEffect(()=>{
        dispatch(getUserOrder())
    },[dispatch])
    return (
        <div>
            <h1>Ordes</h1>
            <div className='row justify-content-center'>
                {loading && <Loading/>}
                {error && <Error error="something went wrong"/>}
                <div className='col-md-8 justify-content-center'>
                      <div className='flex-container' style={{color:"red"}}>
                          <div className='text-left w-100 m-1' >
                                   <h1>Name</h1>
                           </div >
                           <div className='text-left w-100 m-1'>
                                   <h1>Quantity & varient</h1>
                           </div>
                           <div className='text-left w-100 m-1'>
                                   <h1>Price</h1>
                           </div>
                       </div>
                </div><hr/>
                {orders && orders.map(order=>{
                    return (
                       <div className='col-md-8 justify-content-center' >
                           <div className='flex-container'>
                               <div className='text-left w-100 m-1'>
                                   <h1>{order.name}</h1>
                               </div>
                               
                               <div className='text-left w-100 m-1'>
                               <h1>{order.quantity} {order.varient}</h1>
                               </div>
                               <div className='text-left w-100 m-1'>
                               <h1>{order.price}</h1>
                               </div>
                            </div>
                            <hr/>
                       </div>
                      
    
                    )  
                    
                })}
            </div>
        </div>
    )
}