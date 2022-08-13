import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './style.css';

const Login = () => {
    let navigate=useNavigate()

    const [data, setdata]=useState({
        username:"",
        password:"",
    })

    useEffect(()=> {
        const auth=localStorage.getItem('user')
        if (auth) {
            navigate("/todo")
        }
    },[])

    const handlesubmit = (e) => {
        e.preventDefault()
        axios({
            method:'POST',
            headers:{
                // auth: localStorage.setItem('user')
            },
            url:"https://todopracticea.herokuapp.com/login",
            data:data
        }).then((token)=> {
            console.log('Hello',token.data)
            localStorage.setItem("user",token.data)
            navigate("/todo")
        }).catch((err)=> {
            window.alert(err.response.data)
        })
    }
    
  return (
    <div className='reg-Main'>
      <div className='signupContainer2'>
        <p className='Logo-login'><i className="material-icons material-icons-log">person</i></p>
                <p className='reg'>Member Login</p>
                <form onSubmit={handlesubmit}>
                <input className='forminput' type="text" name="email" placeholder='Username' onChange={(e)=> {
                    setdata({...data,username:e.target.value})
                }}/><br/>
                <input className='forminput' type="password" name="password"  placeholder='Password' onChange={(e)=> {
                    setdata({...data,password:e.target.value})
                }}/><br/>
            
                <input className='formsubmitinput' type="submit"  value="LOGIN"/>
                <p className='login-btn'>Forgot Password?</p>
                </form>
               
            </div>
    </div>
  )
}

export default Login
