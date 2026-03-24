import React from 'react'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import { Routes, Route } from "react-router-dom"
import SideBar from './Layout/SideBar'

const App = () => {
  return (
    <>
    <SideBar />
      <Routes>
        <Route path="/" element={  <HomePage />} />
        <Route path="/login" element={  <Login />} />
      </Routes>
    
    </>
  )
}

export default App
