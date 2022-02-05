import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { logoutUser } from '../actions/userAction';

export function Menu(){
  const BASE_URL=process.env.REACT_APP_BASE_URL
  const cartstate=useSelector((state)=>state.cartReducer);
  const userstate=useSelector((state)=>state.loginUserReducer);
  const dispatch=useDispatch();
  const {currentUser}=userstate;
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body rounded">
  <a className="navbar-brand" href="/">PIZZA MAN</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto" >
      {currentUser?(<div className="dropdown mt-2">
  <a style={{color:"black"}}className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"  aria-expanded="false" href="*">
   {currentUser.name}
  </a>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="/orders">Order</a>
    <a className="dropdown-item" href="/" onClick={()=>{dispatch(logoutUser())}}><li>Logout</li></a>
  </div>
</div>): ( <li className="nav-item">
        <a className="nav-link" href="/login">Login</a>
      </li>)}
    
      <li className="nav-item">
        <a className="nav-link" href="/cart">Cart {cartstate.cartItems.length}</a>
      </li>
    </ul>
  </div>
</nav>
    )
}

