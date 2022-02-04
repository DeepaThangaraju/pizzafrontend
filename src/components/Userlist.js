import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { useEffect } from "react";
import {getAllUsers} from "../actions/userAction";
import {deleteUser} from "../actions/userAction"

export function Userlist(){
    const getalluserstate=useSelector(state=>state.getAllUsersReducer)
    const {loading,error,users}=getalluserstate
    const dispatch=useDispatch();
    useEffect(()=>{
          dispatch(getAllUsers())
    },[])
    return (
        <div>
            <h1>User List</h1>
            {loading && <Loading />}
            {error && <Error error="Something went wrong"/>}
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user=>{
                        return <tr>
                                   <td>{user._id}</td>
                                   <td>{user.name}</td>
                                   <td>{user.email}</td>
                                   <td><i className="fa fa-trash" onClick={()=>dispatch(deleteUser(user._id))}></i></td>
                              </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}