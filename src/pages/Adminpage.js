import React from 'react';
import {useSelector} from "react-redux";
import {useEffect} from "react";
import { Switch,Route, Link } from 'react-router-dom';
import {Userlist} from '../components/Userlist';
import { Pizzalist } from '../components/Pizzalist';
import { Addpizza } from '../components/Addpizza';
import { Orderlist } from '../components/Orderlist';
import { Editpizza } from './Editpage';

export function Adminpage(){
  const userstate=useSelector((state)=>state.loginUserReducer);
  
  const {currentUser}=userstate;
  useEffect(()=>{

    if(!currentUser.isAdmin){
        window.location.href="/"
    }
  },[])
  
    return (
        <div className="row justify-content-center">
            <div className='col-md-10'>
        <div>
            <h1>Admin Panel</h1>
        <div className='adminfunction'>
            <ul>
                <li><Link to="/admin/userlist">User List</Link></li>
                <li><Link to="/admin/pizzalist">Pizza List</Link></li>
                <li><Link to="/admin/addpizza">Add Pizza</Link></li>
                <li><Link to="/admin/orderlist">Order List</Link></li>
            </ul>
            

        </div>
        <Switch>
                <Route path="/admin" component={Userlist} exact/>  
                <Route path="/admin/userlist" component={Userlist} exact/>
                <Route path="/admin/pizzalist" component={Pizzalist} exact/>
                <Route path="/admin/addpizza" component={Addpizza} exact/>
                <Route path="/admin/orderlist" component={Orderlist} exact/>
                <Route path="/admin/editpizza/:pizzaid" component={Editpizza} exact/>
            </Switch>
        </div>
        </div>
        </div>
    )
}