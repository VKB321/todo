import axios from 'axios'
import React, { useState } from 'react'

const Popup = (props) => {

    const [Todo, setTodo]=useState({
       activity:"",
        status:"",
        time:""
    })

    const handlesubmit = (e) => {
        e.preventDefault()
        const authToken = localStorage.getItem("user");
        axios({
            method:"POST",
            url:'https://todopracticea.herokuapp.com/todorouter/addtodo',
            headers:{
                authorization: authToken,
            },
            data:Todo
        }).then(()=> { 
                props.value(0)
        }).catch((err)=> {
            window.alert(err.response.Todo)
        })
    }

  return (
    <div className='todo-item'>
        
                <p className='reg'>Add todo Item</p>
                <form onSubmit={handlesubmit}>
                <input className='forminput' type="text" name="email" placeholder='activity' onChange={(e)=> {
                    setTodo({...Todo,activity:e.target.value})
                }}/><br/>
                <input className='forminput' type="text" name="password"  placeholder='status' onChange={(e)=> {
                    setTodo({...Todo,status:e.target.value})
                }}/><br/>
                <input className='forminput' type="text" name="cpassword"  placeholder='time' onChange={(e)=> {
                    setTodo({...Todo,time:e.target.value})
                }}/><br/>
                <input className='formsubmitinput' type="submit" value="Add" />
                <p></p>
                </form>
    </div>
  )
}

export default Popup
