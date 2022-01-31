import react from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {addToCart,deleteFromCart} from '../actions/cardAction';
import { Checkout } from '../components/Checkout';
export function Cartpage(){
    const cartstate=useSelector(state=>state.cartReducer);
    const cartItems=cartstate.cartItems;
    const totalprice=cartItems.reduce((x,item)=>x+item.price,0);
    const dispatch=useDispatch();
    return(
        <div>
           <div className='row justify-content-center'>
               <div className='col-md-6'>
                    <h3 style={{fontSize:"40px"}}>Pizza in Cart</h3>
                    {cartItems.map(item=>{
                        return  <div className='flex-container'>
                        <div className="text-left m-1 w-100">
                            <h1>{item.name} [{item.varient}]</h1>
                            <h1>Price:{item.quantity} * {item.prices[0][item.varient]} = {item.price}</h1>
                            <h1 style={{display:'inline'}}>Quantity:</h1>
                            <i class="fas fa-angle-double-up" onClick={()=>{dispatch(addToCart(item,item.quantity+1,item.varient))}}></i>
                            <b>{item.quantity}</b>
                            <i class="fas fa-angle-double-down" onClick={()=>{dispatch(addToCart(item,item.quantity-1,item.varient))}}></i>
                            <hr/>
                        </div>
                        <div className='m-1 w-100'>
                            <img src={item.image} alt={item.name} style={{height:'80px',width:'80px'}}/>
                        </div>
                        <div className='m-1 w-100 mt-5'>
                        <i class="far fa-trash-alt" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                        </div>
                    </div>
                    })}
                   
               </div>
            </div>
            <div className='row text-right'>
               <div className='col-md-6'>
                   <h3>Total Amount:{totalprice}/-</h3>
                   <Checkout subtotal={totalprice} />
               </div>
            </div>
        </div>

    )
}