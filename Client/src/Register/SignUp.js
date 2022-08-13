import React, { useState } from 'react';
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'
import './style.css'
const SignUp = () => {
  let navigate=useNavigate()

    const [data, setdata]=useState({
        username:"",
        password:"",
        cpassword:""
    })

    const handlesubmit = (e) => {
        e.preventDefault()
        axios({
            method:"POST",
            url:'https://todopracticea.herokuapp.com/',
            data:data
        }).then((user)=> {
                window.alert(user.data)
                console.log(user.data)
                navigate("/login")
        }).catch((err)=> {
            window.alert(err.response.data)
        })
    }


  return (
    <div className='reg-Main'>
      <div className='signupContainer2'>
        <p className='Logo'><i className="material-icons material-icons-reg">mode_edit</i></p>
                <p className='reg'>Register</p>
                <form onSubmit={handlesubmit}>
                <input className='forminput' type="text" name="email" placeholder='Username' onChange={(e)=> {
                    setdata({...data,username:e.target.value})
                }}/><br/>
                <input className='forminput' type="password" name="password"  placeholder='Password' onChange={(e)=> {
                    setdata({...data,password:e.target.value})
                }}/><br/>
                <input className='forminput' type="password" name="cpassword"  placeholder='Confirm Password' onChange={(e)=> {
                    setdata({...data,cpassword:e.target.value})
                }}/><br/>
                <input className='formsubmitinput' type="submit"  value="REGISTER"/>
                <p className='register-btn' onClick={()=>navigate("/login")}>Member Login</p>
                </form>
               
            </div>
    </div>
  )
}

export default SignUp
