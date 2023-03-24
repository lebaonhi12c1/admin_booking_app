import React from 'react';
import { useState, useEffect } from 'react';
import './login.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getuser, getuserfailure, getuserrequest, getusersuccess } from '../../redux/reducer/userSlice';
import { useNavigate } from 'react-router-dom';
import Lazyloading from '../../components/lazyloading/Lazyloading';
function Login(props) {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const user = useSelector(getuser)
    const [userlogin, setuserlogin] = useState({
        username: '',
        password: ''
    })
    const handlelogin = async()=>{
        if(userlogin.username !== '' && userlogin.password !== ''){
            dispatch(getuserrequest())
            try {
                const res =await fetch(`${process.env.REACT_APP_domain}/api/auth/login`,{
                    method: 'post',
                    body: JSON.stringify(userlogin)
                })
                const data = await res.json()
                if(data.isAdmin){
                    dispatch(getusersuccess(data))
                    navigation('/')
                }
            } catch (error) {
                dispatch(getuserfailure())
            }
        }
    }
    return (
        <div className='login'>
            <div className='form'>
                <div className='heading'>Login</div>
                <div className='controls'>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' placeholder='Type your username...' onChange={e=>setuserlogin({...userlogin,username: e.target.value})} />
                </div>
                <div className='controls'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Type your password...' onChange={e=>setuserlogin({...userlogin,password: e.target.value})} />
                </div>
                <div className='btn' onClick={handlelogin}>Login</div>
            </div>
            {user?.loading &&  <Lazyloading heading={'Login...'}/>}
        </div>
    );
}

export default Login;