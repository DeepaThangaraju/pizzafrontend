import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { loginUser } from '../actions/userAction';
import { Error } from '../components/Error';
import { Loading } from '../components/Loading';

export function Loginpage(){
    
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const loginstate=useSelector(state=>state.loginUserReducer)
    const {loading,error}=loginstate
    const dispatch=useDispatch();
    useEffect(()=>{
        if(localStorage.getItem('currentUser'))
        {
            window.location.href='/'
        }
    },[])
    function login(){
      const user={email,password}
      dispatch(loginUser(user));
    }
    return (
        <div>
        <div className='row justify-content-center mt-5 '>
            <div className='col-md-5 mt-5 text-left shadow-none p-3 mb-5 bg-light rounded'>
                <h2 style={{fontSize:"35px"}} className='text-center m-2'>Login</h2>
                 {loading && <Loading />}
                 {error && <Error error="Invalid credentials"/>}
                 <div>
                    
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
                    <button className='btn mt-3 mb-3' onClick={login}>LOGIN</button><br/>
                    <a href="/register" className='text-center'>Click here to register</a>
                </div>
            </div>
            
        </div>
    </div>
)
}