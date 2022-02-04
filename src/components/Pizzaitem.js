import React from "react";
import {useState} from "react";
import {Modal} from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cardAction";



export function Pizzaitem({pizza}){
    const [varient,setVarient]=useState("small");
    const [quantity,setQuantity]=useState(1);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch=useDispatch();
    function addpizza(){
        dispatch(addToCart(pizza , quantity, varient))
    }

    return (
    <div className="shadow p-3 mb-5 bg-body rounded" style={{background:"#9EF5EC !important"}} >
        <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
    <img src={pizza.image} alt={pizza.name} className="img-fluid" style={{height:'200px',width:"200px"}}/>
    
        </div>
      <div className="flex-container" >
         <div className="w-100 m-1">
             <p>Varients</p>
             <select className="form-control" value={varient} onChange={(e)=>setVarient(e.target.value)}>
                 {pizza.varients.map(varient=>{
                     return <option value={varient}>{varient}</option>
                 })}
             </select>
         </div>
         <div className="w-100 m-1">
             <p>Quantity</p>
             <select className="form-control" value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
                 {[...Array(10).keys()].map((x,i)=>{
                     return <option value={i+1}>{i+1}</option>
                 })}
             </select>
         </div>
     </div>
     <div className="flex-container" >
        
         <div className="m-1 w-100">
             <h1>Price:{pizza.prices[0][varient]*quantity}</h1>
         </div>
         <div className="m-1 w-100">
             <button className="btn" onClick={addpizza}>Add</button>
         </div>
     </div>

     <Modal show={show}>
  <Modal.Header>
    <Modal.Title>{pizza.name}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <img src={pizza.image} alt={pizza.name} className="img-fluid" style={{height:'300px'}}/>
  <p>{pizza.description}</p>
  </Modal.Body>

  <Modal.Footer>
   <button className="btn" onClick={handleClose}>Close</button>
  </Modal.Footer>
</Modal>
    </div>
    )
}