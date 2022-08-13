import React from 'react'
import Login from './Login/Login'
import SignUp from './Register/SignUp'
import TodoList from './Todo/TodoList'
import Private from './private'
import {BrowserRouter, Routes, Route} from "react-router-dom"



const App = () => {
  return (
    <div>
       <BrowserRouter>
      <Routes> 
      <Route path='/' element={<SignUp/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route element={<Private/>}>
      <Route path='/todo' element={<TodoList/>}></Route>
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
