import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { registerUser } from '../actions/userAction';
import {Error} from '../components/Error';
import { Success } from '../components/Success';
import { Loading } from '../components/Loading';

export function Registerpage(){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [cpassword,setCpassword]=useState('');
    const registerstate=useSelector(state=>state.registerUserReducer)
    const {error,loading,success}=registerstate;
    const dispatch=useDispatch();

    function register(){
        if(password!==cpassword){
            alert("password not matched")
        }else{
            const user={
                name,
                email,
                password
            }
            console.log(user);
            dispatch(registerUser(user));
        }
    }
    
    return(
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 mt-5 text-left shadow-none p-3 mb-5 bg-light rounded'>
                       {loading && <Loading />}
                       {success && <Success success="User registered successfully"/>}
                       {error && <Error error="Invalid credentials"/>}
                    
                    
                    <h2 style={{fontSize:"35px"}} className='text-center m-2'>Register</h2>
                    <div>
                        <input 
                        required
                        type="text" 
                        placeholder='name' 
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className='form-control'/>
                        <input 
                        required
                        type="text" 
                        placeholder='email' 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className='form-control'/>
                        <input 
                        required
                        type="text" 
                        placeholder='password' 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className='form-control'/>
                        <input 
                        required
                        type="text" 
                        placeholder='confirm password'
                        value={cpassword}
                        onChange={(e)=>setCpassword(e.target.value)} 
                        className='form-control'/>
                        <button className='btn mt-3 mb-3' onClick={register}>REGISTER</button>
                        <br/>
                        <a href="/login">Click here to login</a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}