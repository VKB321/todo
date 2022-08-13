import React from 'react'
import Header from './header';
import Sidebar from './sidebar';
import Content from './Content';

const todoList = () => {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Content/>
    </div>
  )
}

export default todoList
