import React from 'react'
import './sidebar.css'


const sidebar = () => {
    const logout=()=> {
        localStorage.clear()
        window.history.forward()
      
    }
  return (
    <div className='sidebar'>
        <p className='todo-sen'>To do List</p>
        <p>History</p>
        <button className='logout-btn' onClick={logout}>Logout</button>
     
    </div>
  )
}

export default sidebar
